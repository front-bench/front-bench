/* eslint-disable no-console */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

interface ResultItem {
  key: string;
  value: number;
}

interface CandidateJson {
  key: string;
  results: ResultItem[];
}

function isResultItem(value: unknown): value is ResultItem {
  return (
    isRecord(value) &&
    typeof value.key === 'string' &&
    (typeof value.value === 'number' || typeof value.value === 'string')
  );
}

function isCandidateJson(value: unknown): value is CandidateJson {
  return (
    isRecord(value) &&
    typeof value.key === 'string' &&
    Array.isArray(value.results) &&
    value.results.every((item) => isResultItem(item))
  );
}

type UpdateFileResult =
  | {
      updated: false;
      skipped: true;
      reason: 'invalid-json' | 'missing-key' | 'missing-results' | 'no-downloads-result';
    }
  | {
      updated: boolean;
      skipped: false;
      packageName: string;
      oldValue: number;
      newValue: number;
    };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, '../src/data');
const RESULT_KEY = 'npm-weekly-downloads';
const NPM_DOWNLOADS_API = 'https://api.npmjs.org/downloads/point/last-week/';

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object';
}

async function walkJsonFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walkJsonFiles(fullPath);
      }
      if (entry.isFile() && entry.name.endsWith('.json')) {
        return [fullPath];
      }
      return [] as string[];
    }),
  );

  return files.flat();
}

async function fetchWeeklyDownloads(pkgName: string): Promise<number> {
  const url = `${NPM_DOWNLOADS_API}${encodeURIComponent(pkgName)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`npm API returned ${response.status} for ${pkgName}`);
  }

  const data = (await response.json()) as { downloads?: unknown };
  const downloads = Number(data.downloads);

  if (!Number.isFinite(downloads)) {
    throw new Error(`invalid downloads value for ${pkgName}`);
  }

  return Math.round(downloads);
}

async function updateFile(filePath: string): Promise<UpdateFileResult> {
  const raw = await readFile(filePath, 'utf8');
  let json: unknown;

  try {
    json = JSON.parse(raw);
  } catch {
    return { updated: false, skipped: true, reason: 'invalid-json' };
  }

  if (!isRecord(json) || typeof json.key !== 'string') {
    return { updated: false, skipped: true, reason: 'missing-key' };
  }

  if (!Array.isArray(json.results)) {
    return { updated: false, skipped: true, reason: 'missing-results' };
  }

  if (!isCandidateJson(json)) {
    return { updated: false, skipped: true, reason: 'missing-results' };
  }

  const resultIndex = json.results.findIndex((item) => isRecord(item) && item.key === RESULT_KEY);

  if (resultIndex === -1) {
    return { updated: false, skipped: true, reason: 'no-downloads-result' };
  }

  const downloads = await fetchWeeklyDownloads(json.key);
  const oldValue = Number(json.results[resultIndex].value);

  json.results[resultIndex].value = downloads;

  const formatted = `${JSON.stringify(json, null, 2)}\n`;
  await writeFile(filePath, formatted, 'utf8');

  return {
    updated: oldValue !== downloads,
    skipped: false,
    packageName: json.key,
    oldValue,
    newValue: downloads,
  };
}

async function main(): Promise<void> {
  const files = await walkJsonFiles(DATA_DIR);
  let updatedCount = 0;
  let processedCount = 0;
  let failedCount = 0;

  for (const filePath of files) {
    try {
      const result = await updateFile(filePath);
      if (result.skipped) {
        continue;
      }

      processedCount += 1;
      if (result.updated) {
        updatedCount += 1;
      }

      const rel = path.relative(process.cwd(), filePath);
      console.log(`${rel}: ${result.packageName} ${result.oldValue} -> ${result.newValue}`);
    } catch (error) {
      failedCount += 1;
      const rel = path.relative(process.cwd(), filePath);
      const message = error instanceof Error ? error.message : String(error);
      console.error(`${rel}: failed - ${message}`);
    }
  }

  console.log(
    `Done. processed=${processedCount}, updated=${updatedCount}, failed=${failedCount}, scanned=${files.length}`,
  );

  if (failedCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.stack || error.message : String(error);
  console.error(message);
  process.exit(1);
});

import type { Result } from './Result';

export default interface Candidate {
  slug: string;
  name: string;
  version?: string;
  results?: Result[];
}

import type { Result } from './Result';

export default interface Candidate {
  key: string;
  name: string;
  version?: string;
  results?: Result[];
}

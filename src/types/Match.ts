import type Candidate from './Candidate';

export default interface Match {
  slug: string;
  name: string;
  candidates?: Candidate[];
}

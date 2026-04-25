import type Candidate from './Candidate';
import type Spec from './Spec';

export default interface Match {
  slug: string;
  name: string;
  specs?: Spec[];
  candidates?: Candidate[];
}

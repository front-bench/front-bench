import type Candidate from './Candidate';
import type Spec from './Spec';

export default interface Match {
  key: string;
  name: string;
  specs?: Spec[];
  candidates?: Candidate[];
}

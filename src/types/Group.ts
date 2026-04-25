import type Match from './Match';

export default interface Group {
  key: string;
  name: string;
  matches?: Match[];
}

import type Match from './Match';

export default interface Group {
  slug: string;
  name: string;
  matches?: Match[];
}

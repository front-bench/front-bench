import type Candidate from '../../../types/Candidate';

const material: Candidate = {
  key: 'material',
  name: 'Material UI',
  version: '9.x',
  results: [
    {
      key: 'button-bundle-size',
      value: 12345, // Example bundle size in bytes
      score: 0.8, // Example score based on bundle size (lower is better)
    },
  ],
};

export default material;

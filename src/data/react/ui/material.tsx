import type Candidate from '../../../types/Candidate';

const material: Candidate = {
  slug: 'material',
  name: 'Material UI',
  results: [
    {
      slug: 'button-bundle-size',
      value: 12345, // Example bundle size in bytes
      score: 0.8, // Example score based on bundle size (lower is better)
    },
  ],
};

export default material;

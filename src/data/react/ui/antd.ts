import type Candidate from '../../../types/Candidate';

const antd: Candidate = {
  key: 'antd',
  name: 'Ant Design',
  version: '6.x',
  results: [
    {
      key: 'button-bundle-size',
      value: 12345, // Example bundle size in bytes
      score: 0.8, // Example score based on bundle size (lower is better)
    },
  ],
};

export default antd;

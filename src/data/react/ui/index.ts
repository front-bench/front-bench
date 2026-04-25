import type Match from '../../../types/Match';
import antd from './antd';

const ui: Match = {
  slug: 'ui',
  name: 'UI Libraries',
  candidates: [antd],
  specs: [
    {
      slug: 'button-bundle-size',
      name: 'Button: Bundle Size',
      weight: 0.5,
    },
  ],
};

export default ui;

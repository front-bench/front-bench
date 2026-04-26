import type Match from '../../../types/Match';
import antd from './antd.json';
import material from './material.json';

const ui: Match = {
  key: 'ui',
  name: 'UI Libraries',
  candidates: [antd, material],
  specs: [
    {
      key: 'button-bundle-size',
      name: 'Button: Bundle Size',
      weight: 0.5,
    },
  ],
};

export default ui;

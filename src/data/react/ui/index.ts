import type Match from '../../../types/Match';
import antd from './antd.json';
import mantine from './mantine.json';
import material from './material.json';

const ui: Match = {
  key: 'ui',
  name: 'UI Libraries',
  candidates: [antd, material, mantine],
  specs: [
    {
      key: 'npm-weekly-downloads',
      name: 'NPM Weekly Downloads',
      weight: 5,
      min: 1000,
      max: 100000,
    },
    {
      key: 'button-component',
      name: 'Button Component',
      type: 'feature',
    },
  ],
};

export default ui;

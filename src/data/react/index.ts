import type Group from '../../types/Group';
import router from './router';
import ui from './ui';

const react: Group = {
  slug: 'react',
  name: 'React',
  matches: [ui, router],
};

export default react;

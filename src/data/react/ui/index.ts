import type Candidate from '../../../types/Candidate';
import type Match from '../../../types/Match';
import antd from './antd.json';
import chakra from './chakra.json';
import headlessui from './headlessui.json';
import heroui from './heroui.json';
import mantine from './mantine.json';
import material from './material.json';
import primereact from './primereact.json';
import radixui from './radix-ui.json';
import reactAriaComponents from './react-aria-components.json';
import reactBootstrap from './react-bootstrap.json';

const DOWNLOADS_KEY = 'npm-weekly-downloads';

function getWeeklyDownloads(candidate: Candidate): number {
  return candidate.results?.find((result) => result.key === DOWNLOADS_KEY)?.value ?? 0;
}

const candidates: Candidate[] = [
  antd,
  chakra,
  headlessui,
  heroui,
  mantine,
  material,
  primereact,
  radixui,
  reactAriaComponents,
  reactBootstrap,
].sort((a, b) => {
  const diff = getWeeklyDownloads(b) - getWeeklyDownloads(a);
  if (diff !== 0) {
    return diff;
  }

  return a.name.localeCompare(b.name);
});

const ui: Match = {
  key: 'ui',
  name: 'UI Libraries',
  candidates,
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
    {
      key: 'float-button-component',
      name: 'FloatButton Component',
      type: 'feature',
    },
    {
      key: 'speed-dial-component',
      name: 'SpeedDial Component',
      type: 'feature',
    },
    {
      key: 'dropdown-menu-component',
      name: 'Dropdown/Menu Component',
      type: 'feature',
    },
    {
      key: 'dialog-modal-component',
      name: 'Dialog/Modal Component',
      type: 'feature',
    },
    {
      key: 'tabs-component',
      name: 'Tabs Component',
      type: 'feature',
    },
    {
      key: 'checkbox-component',
      name: 'Checkbox Component',
      type: 'feature',
    },
    {
      key: 'input-component',
      name: 'Input Component',
      type: 'feature',
    },
    {
      key: 'radio-component',
      name: 'Radio Component',
      type: 'feature',
    },
    {
      key: 'select-component',
      name: 'Select Component',
      type: 'feature',
    },
    {
      key: 'switch-component',
      name: 'Switch Component',
      type: 'feature',
    },
    {
      key: 'textarea-component',
      name: 'TextArea Component',
      type: 'feature',
    },
    {
      key: 'accordion-component',
      name: 'Accordion Component',
      type: 'feature',
    },
    {
      key: 'alert-component',
      name: 'Alert Component',
      type: 'feature',
    },
    {
      key: 'autocomplete-component',
      name: 'Autocomplete Component',
      type: 'feature',
    },
    {
      key: 'avatar-component',
      name: 'Avatar Component',
      type: 'feature',
    },
  ],
};

export default ui;

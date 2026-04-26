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
    {
      key: 'badge-component',
      name: 'Badge Component',
      type: 'feature',
    },
    {
      key: 'breadcrumbs-component',
      name: 'Breadcrumbs Component',
      type: 'feature',
    },
    {
      key: 'button-component',
      name: 'Button Component',
      type: 'feature',
    },
    {
      key: 'button-group-component',
      name: 'ButtonGroup Component',
      type: 'feature',
    },
    {
      key: 'calendar-component',
      name: 'Calendar Component',
      type: 'feature',
    },
    {
      key: 'card-component',
      name: 'Card Component',
      type: 'feature',
    },
    {
      key: 'carousel-component',
      name: 'Carousel Component',
      type: 'feature',
    },
    {
      key: 'cascade-select-component',
      name: 'CascadeSelect Component',
      type: 'feature',
    },
    {
      key: 'checkbox-component',
      name: 'Checkbox Component',
      type: 'feature',
    },
    {
      key: 'checkbox-group-component',
      name: 'CheckboxGroup Component',
      type: 'feature',
    },
    {
      key: 'chip-tag-component',
      name: 'Chip/Tag Component',
      type: 'feature',
    },
    {
      key: 'color-picker-component',
      name: 'ColorPicker Component',
      type: 'feature',
    },
    {
      key: 'config-provider-component',
      name: 'ConfigProvider Component',
      type: 'feature',
    },
    {
      key: 'container-component',
      name: 'Container Component',
      type: 'feature',
    },
    {
      key: 'context-menu-component',
      name: 'ContextMenu Component',
      type: 'feature',
    },
    {
      key: 'date-picker-component',
      name: 'DatePicker Component',
      type: 'feature',
    },
    {
      key: 'date-range-picker-component',
      name: 'DateRangePicker Component',
      type: 'feature',
    },
    {
      key: 'dialog-modal-component',
      name: 'Dialog/Modal Component',
      type: 'feature',
    },
    {
      key: 'divider-separator-component',
      name: 'Divider/Separator Component',
      type: 'feature',
    },
    {
      key: 'drawer-component',
      name: 'Drawer Component',
      type: 'feature',
    },
    {
      key: 'dropdown-component',
      name: 'Dropdown Component',
      type: 'feature',
    },
    {
      key: 'flex-component',
      name: 'Flex Component',
      type: 'feature',
    },
    {
      key: 'float-button-component',
      name: 'FloatButton Component',
      type: 'feature',
    },
    {
      key: 'form-component',
      name: 'Form Component',
      type: 'feature',
    },
    {
      key: 'grid-component',
      name: 'Grid Component',
      type: 'feature',
    },
    {
      key: 'input-component',
      name: 'Input Component',
      type: 'feature',
    },
    {
      key: 'input-group-component',
      name: 'InputGroup Component',
      type: 'feature',
    },
    {
      key: 'input-number-component',
      name: 'InputNumber Component',
      type: 'feature',
    },
    {
      key: 'input-otp-component',
      name: 'InputOTP Component',
      type: 'feature',
    },
    {
      key: 'input-password-component',
      name: 'InputPassword Component',
      type: 'feature',
    },
    {
      key: 'layout-component',
      name: 'Layout Component',
      type: 'feature',
    },
    {
      key: 'list-component',
      name: 'List Component',
      type: 'feature',
    },
    {
      key: 'menu-component',
      name: 'Menu Component',
      type: 'feature',
    },
    {
      key: 'menubar-component',
      name: 'Menubar Component',
      type: 'feature',
    },
    {
      key: 'mention-component',
      name: 'Mention Component',
      type: 'feature',
    },
    {
      key: 'pagination-component',
      name: 'Pagination Component',
      type: 'feature',
    },
    {
      key: 'popover-component',
      name: 'Popover Component',
      type: 'feature',
    },
    {
      key: 'popup-confirm-component',
      name: 'PopupConfirm Component',
      type: 'feature',
    },
    {
      key: 'progress-bar-component',
      name: 'ProgressBar Component',
      type: 'feature',
    },
    {
      key: 'progress-circle-component',
      name: 'ProgressCircle Component',
      type: 'feature',
    },
    {
      key: 'radio-component',
      name: 'Radio Component',
      type: 'feature',
    },
    {
      key: 'radio-group-component',
      name: 'RadioGroup Component',
      type: 'feature',
    },
    {
      key: 'rating-component',
      name: 'Rating Component',
      type: 'feature',
    },
    {
      key: 'scroll-shadow-component',
      name: 'ScrollShadow Component',
      type: 'feature',
    },
    {
      key: 'search-component',
      name: 'Search Component',
      type: 'feature',
    },
    {
      key: 'select-component',
      name: 'Select Component',
      type: 'feature',
    },
    {
      key: 'skeleton-component',
      name: 'Skeleton Component',
      type: 'feature',
    },
    {
      key: 'slider-component',
      name: 'Slider Component',
      type: 'feature',
    },
    {
      key: 'speed-dial-component',
      name: 'SpeedDial Component',
      type: 'feature',
    },
    {
      key: 'spinner-component',
      name: 'Spinner Component',
      type: 'feature',
    },
    {
      key: 'splitter-component',
      name: 'Splitter Component',
      type: 'feature',
    },
    {
      key: 'steps-component',
      name: 'Steps Component',
      type: 'feature',
    },
    {
      key: 'surface-component',
      name: 'Surface Component',
      type: 'feature',
    },
    {
      key: 'switch-component',
      name: 'Switch Component',
      type: 'feature',
    },
    {
      key: 'table-component',
      name: 'Table Component',
      type: 'feature',
    },
    {
      key: 'tabs-component',
      name: 'Tabs Component',
      type: 'feature',
    },
    {
      key: 'textarea-component',
      name: 'TextArea Component',
      type: 'feature',
    },
    {
      key: 'time-picker-component',
      name: 'TimePicker Component',
      type: 'feature',
    },
    {
      key: 'time-range-picker-component',
      name: 'TimeRangePicker Component',
      type: 'feature',
    },
    {
      key: 'timeline-component',
      name: 'Timeline Component',
      type: 'feature',
    },
    {
      key: 'toast-component',
      name: 'Toast Component',
      type: 'feature',
    },
    {
      key: 'toggle-button-component',
      name: 'ToggleButton Component',
      type: 'feature',
    },
    {
      key: 'toggle-button-group-component',
      name: 'ToggleButtonGroup Component',
      type: 'feature',
    },
    {
      key: 'toolbar-component',
      name: 'Toolbar Component',
      type: 'feature',
    },
    {
      key: 'tooltip-component',
      name: 'Tooltip Component',
      type: 'feature',
    },
    {
      key: 'transfer-component',
      name: 'Transfer Component',
      type: 'feature',
    },
    {
      key: 'tree-component',
      name: 'Tree Component',
      type: 'feature',
    },
    {
      key: 'tree-select-component',
      name: 'TreeSelect Component',
      type: 'feature',
    },
    {
      key: 'typography-component',
      name: 'Typography Component',
      type: 'feature',
    },
    {
      key: 'upload-component',
      name: 'Upload Component',
      type: 'feature',
    },
  ],
};

export default ui;

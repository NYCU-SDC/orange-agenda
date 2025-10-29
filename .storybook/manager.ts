import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'The Orange Agenda',
    brandUrl: 'https://nycu-sdc.github.io/orange-agenda/',
    brandImage: '/logo.svg', // 可以放在 public/ 下
    colorPrimary: '#f97316',
    colorSecondary: '#fb923c',
  }),
});

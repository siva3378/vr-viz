import 'babel-polyfill';
import 'webvr-polyfill';
import 'aframe';
import 'aframe-extras';
import 'aframe-layout-component';

import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

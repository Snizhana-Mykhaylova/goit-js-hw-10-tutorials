import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

import { defaults } from '@pnotify/core';

import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Notice me, senpai!',
});

// Set default styling.
defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';

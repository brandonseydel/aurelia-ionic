
import { MyApp } from './my-app';
import './theme/variables.scss';
import { IonicFramework } from '../src';
import Aurelia, { JitHtmlBrowserConfiguration, DebugConfiguration } from 'aurelia';
import { applyPolyfills, defineCustomElements } from '@ionic/core/loader';
import { addIcons } from 'ionicons';
import { arrowBackSharp, chevronBack, paperPlane, chevronForward, closeCircle, closeSharp, menuOutline, menuSharp, reorderTwoSharp, reorderThreeOutline, searchOutline, searchSharp, add, pin, wine } from 'ionicons/icons';

new Aurelia()
  .register(JitHtmlBrowserConfiguration, DebugConfiguration, IonicFramework.config())
  .app({ component: MyApp, host: document.querySelector('my-app') })
  .start()
  .wait();
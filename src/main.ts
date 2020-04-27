import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { addIcons } from "ionicons";
import { applyPolyfills, defineCustomElements } from '@ionic/core/loader';
import { arrowBackSharp, chevronBack, chevronForward, closeCircle, closeSharp, menuOutline, menuSharp, reorderThreeOutline, reorderTwoSharp, searchOutline, searchSharp, add, close, paperPlane, pin, wine } from 'ionicons/icons';
import 'theme/variables.scss';
import 'global.scss';

Aurelia
  .app(MyApp)
  .start();
  applyPolyfills().then(() => defineCustomElements()).then(() => 
addIcons({
  'arrow-back-sharp': arrowBackSharp,
  'chevron-back': chevronBack,
  'paper-plane': paperPlane,
  'chevron-forward': chevronForward,
  'close-circle': closeCircle,
  'close-sharp': closeSharp,
  'menu-outline': menuOutline,
  'menu-sharp': menuSharp,
  'reorder-two-sharp': reorderTwoSharp,
  'reorder-three-outline': reorderThreeOutline,
  'search-outline': searchOutline,
  'search-sharp': searchSharp,
  'add': add,
  'pin': pin,
  'close': close,
  'wine': wine
}));
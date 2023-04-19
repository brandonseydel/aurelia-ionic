import { RouterConfiguration } from '@aurelia/router-lite';
import { Aurelia, ShortHandBindingSyntax, StandardConfiguration } from '@aurelia/runtime-html';
import { ValidationHtmlConfiguration, ValidationTrigger } from '@aurelia/validation-html';

import { IonicAurelia } from '../src/registration';

import { App } from './app/app';

import '@ionic/core/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
/* Theme variables */
import './theme/variables.scss';

void new Aurelia()
  .register(
    StandardConfiguration,
    ShortHandBindingSyntax,
    RouterConfiguration.customize({ useUrlFragmentHash: false }),
    ValidationHtmlConfiguration.customize((x) => {
      x.DefaultTrigger = ValidationTrigger.change;
    }),
    IonicAurelia.config(),
  )
  .app({
    component: App,
    host: document.querySelector('app') ?? document.documentElement,
  })
  .start();

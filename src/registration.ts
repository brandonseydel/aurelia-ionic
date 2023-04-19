import { IContainer } from '@aurelia/kernel';
import { attributePattern, AttrSyntax } from '@aurelia/runtime-html';

import * as IonicComponents from './components';
import * as IonicControllers from './controllers';
import { IonicMapper } from './ionic-mapper';

import { initialize, IonicConfig } from '@ionic/core/components';

@attributePattern({ pattern: 'ion-PART', symbols: '-' })
class IonAttributePattern {
  ['ion-PART'](rawName: string, rawValue: string, parts: string[]): AttrSyntax {
    return new AttrSyntax(rawName, rawValue, `ion${parts[1][0].toUpperCase()}${parts[1].substring(1)}`.replace('.trigger', ''), 'trigger');
  }
}

function setup(container: IContainer, config: IonicConfig = {}): IContainer {
  // eslint-disable-next-line no-console
  console.info('%cRegistering Ionic Framework....', 'color:cyan;background-color:black;font-size:1.2em;');
  document.documentElement.classList.add('ion-ce');
  initialize({ ...config });
  return container.register(IonAttributePattern, IonicComponents, IonicControllers, IonicMapper);
}

export const IonicAurelia = {
  register(container: IContainer): IContainer {
    return setup(container);
  },
  customize(config: IonicConfig = {}) {
    return {
      register(container: IContainer): IContainer {
        return setup(container, config);
      },
    };
  },
};

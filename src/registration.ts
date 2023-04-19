import { IContainer, IRegistry } from '@aurelia/kernel';
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

export class IonicAurelia implements IRegistry {
  config: IonicConfig = {};
  static config(config: IonicConfig = {}): IonicAurelia {
    const instance = new IonicAurelia();
    instance.config = config;
    return instance;
  }

  register(container: IContainer): void {
    // eslint-disable-next-line no-console
    console.info('%cRegistering Ionic Framework....', 'color:cyan;background-color:black;font-size:1.2em;');
    document.documentElement.classList.add('ion-ce');
    initialize({ ...this.config });
    container.register(IonAttributePattern, IonicComponents, IonicControllers, IonicMapper);
  }
}

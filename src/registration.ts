import { IContainer, IRegistry, Registration, DI, } from '@aurelia/kernel';
import { AttrSyntax, NodeObserverLocator, attributePattern, AppTask, IAttrMapper } from '@aurelia/runtime-html';

import { IonicConfig, initialize } from '@ionic/core/components';

import * as IonicComponents from './components';
import * as IonicControllers from './controllers';
import { CustomAttribute, CustomElement, inject } from 'aurelia';
import { LoadCustomAttribute, ViewportCustomElement } from '@aurelia/router-lite';



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
    const newContainer = DI.createContainer();
    console.info('%cRegistering Ionic Framework....', 'color:cyan;background-color:black;font-size:1.2em;');

    if (typeof (document as any) !== "undefined") {
      document.documentElement.classList.add("ion-ce");
    }

    initialize({ ...this.config });

    container.register([
      Registration.aliasTo(LoadCustomAttribute, CustomAttribute.keyFrom('router-link')),
      Registration.aliasTo(ViewportCustomElement, CustomElement.keyFrom('ion-router-outlet')),
      IonAttributePattern,
      IonicComponents,
      IonicControllers,
      AppTask.creating(IContainer, (container) => {
        const attrMapper = container.get(IAttrMapper);
        const nodeObserverLocator = container.get(NodeObserverLocator);
        attrMapper.useTwoWay((el, property) => {
          return property === 'value';
        });

        const valuePropertyConfig = { events: ['input', 'change'] };
        nodeObserverLocator.useConfig({
          'ION-INPUT': {
            value: valuePropertyConfig,
          },
          'ION-RADIO-GROUP': {
            value: valuePropertyConfig,
          },
          'ION-TEXTAREA': {
            value: valuePropertyConfig,
          },
          'ION-SEARCHBAR': {
            value: valuePropertyConfig,
          },
          'ION-RANGE': {
            value: valuePropertyConfig,
          },
          'ION-SELECT': {
            value: valuePropertyConfig,
          },
          'ION-RADIO': {
            value: { events: [...valuePropertyConfig.events, 'select'] },
          },
          'ION-SEGMENT': {
            value: valuePropertyConfig,
          },
          'ION-DATETIME': {
            value: valuePropertyConfig,
          },
          'ION-CHECKBOX': {
            value: valuePropertyConfig,
            checked: valuePropertyConfig,
          },
          'ION-TOGGLE': {
            value: valuePropertyConfig,
            checked: valuePropertyConfig,
          }
        });
      }),
    ]);
  }
}

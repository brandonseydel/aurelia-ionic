import { CustomAttribute, CustomElement } from 'aurelia';
import { IContainer, IRegistry, Registration } from '@aurelia/kernel';
import { LoadCustomAttribute, ViewportCustomElement } from '@aurelia/router-lite';
import { AppTask, attributePattern, AttrSyntax, IAttrMapper, NodeObserverLocator } from '@aurelia/runtime-html';

import * as IonicComponents from './components';
import * as IonicControllers from './controllers';

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
          },
        });
      }),
    ]);
  }
}

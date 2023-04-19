import { IContainer } from '@aurelia/kernel';
import { IAttrMapper, NodeObserverLocator } from '@aurelia/runtime-html';

export const IonicMapper = {
  register(container: IContainer) {
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
  },
};

import { Constructable, IContainer, singleton } from '@aurelia/kernel';
import { Controller, CustomElement } from '@aurelia/runtime-html';

import { FrameworkDelegate } from '@ionic/core/components';

@singleton()
export class AureliaDelegate implements FrameworkDelegate {
  // constructor(@IContainer readonly container: IContainer) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async removeViewFromDom(_: any, component: HTMLElement): Promise<void> {
    const customElement = CustomElement.for(component);
    await customElement.deactivate(customElement, null);
  }

  async attachViewToDom(parentElement: HTMLElement, component: Constructable, opts?: object, classes?: string[]): Promise<HTMLElement> {
    const controller = Controller.$el({} as IContainer, component, parentElement, null);
    if (classes?.length) controller.host.classList.add(...classes);

    if (opts) {
      try {
        Object.getOwnPropertyNames(CustomElement.getDefinition(component).bindables)
          .filter((x) => Object.getOwnPropertyNames(opts).includes(x))
          .forEach((prop) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            controller[prop] = opts[prop];
          });
      } catch {
        //noop
      }
    }
    await controller.activate(controller, null);
    return controller.host;
  }
}

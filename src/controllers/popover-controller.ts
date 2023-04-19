import { IContainer, Registration } from '@aurelia/kernel';

import { AureliaDelegate } from './framework-delegate';

import { popoverController, type PopoverOptions } from '@ionic/core/components';
import { defineCustomElement } from '@ionic/core/components/ion-popover';

type PopoverControllerType = typeof popoverController;

export class PopoverController implements PopoverControllerType {
  constructor(private readonly delegate: AureliaDelegate) {}

  create(options: PopoverOptions): Promise<HTMLIonPopoverElement> {
    defineCustomElement();
    return popoverController.create({ ...options, delegate: this.delegate });
  }
  dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
    return popoverController.dismiss(data, role, id);
  }
  getTop(): Promise<HTMLIonPopoverElement | undefined> {
    return popoverController.getTop();
  }
  static register(container: IContainer) {
    container.register(Registration.singleton(PopoverController, PopoverController));
  }
}

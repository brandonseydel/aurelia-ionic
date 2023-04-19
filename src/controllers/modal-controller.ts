import { IContainer, Registration } from '@aurelia/kernel';

import { AureliaDelegate } from './framework-delegate';

import { ComponentRef, modalController, type ModalOptions } from '@ionic/core/components';
import { defineCustomElement } from '@ionic/core/components/ion-modal';

type ModalControllerType = typeof modalController;

export class ModalController implements ModalControllerType {
  constructor(private readonly delegate: AureliaDelegate) {}
  create<T extends ComponentRef>(options: ModalOptions<T>): Promise<HTMLIonModalElement> {
    defineCustomElement();
    return modalController.create({
      ...options,
      delegate: this.delegate,
    });
  }
  dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
    return modalController.dismiss(data, role, id);
  }
  getTop(): Promise<HTMLIonModalElement | undefined> {
    return modalController.getTop();
  }
  static register(container: IContainer) {
    container.register(Registration.singleton(ModalController, ModalController));
  }
}

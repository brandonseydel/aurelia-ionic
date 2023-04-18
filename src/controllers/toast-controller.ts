import { toastController, type ToastOptions } from '@ionic/core/components';
import { defineCustomElement } from '@ionic/core/components/ion-toast';

type ToastControllerType = typeof toastController;

export class ToastController implements ToastControllerType {
  create(options: ToastOptions): Promise<HTMLIonToastElement> {
    defineCustomElement();
    return toastController.create(options);
  }
  dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
    return toastController.dismiss(data, role, id);
  }
  getTop(): Promise<HTMLIonToastElement | undefined> {
    return toastController.getTop();
  }
}

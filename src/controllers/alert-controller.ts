import { singleton } from '@aurelia/kernel';

import { alertController, type AlertOptions } from '@ionic/core/components';
import { defineCustomElement } from '@ionic/core/components/ion-alert';

type AlertControllerType = typeof alertController;
@singleton()
export class AlertController implements AlertControllerType {
  constructor() {
    defineCustomElement();
  }
  create(options: AlertOptions): Promise<HTMLIonAlertElement> {
    return alertController.create(options);
  }
  dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
    return alertController.dismiss(data, role, id);
  }
  getTop(): Promise<HTMLIonAlertElement | undefined> {
    return alertController.getTop();
  }
}

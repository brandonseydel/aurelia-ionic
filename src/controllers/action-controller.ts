import { singleton } from '@aurelia/kernel';

import { actionSheetController, type ActionSheetOptions } from '@ionic/core/components';
import { defineCustomElement } from '@ionic/core/components/ion-action-sheet';

type ActionSheetControllerType = typeof actionSheetController;

@singleton()
export class ActionSheetController implements ActionSheetControllerType {
  constructor() {
    defineCustomElement();
  }
  create(options: ActionSheetOptions): Promise<HTMLIonActionSheetElement> {
    return actionSheetController.create({ ...options });
  }
  dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
    return actionSheetController.dismiss(data, role, id);
  }
  getTop(): Promise<HTMLIonActionSheetElement | undefined> {
    return actionSheetController.getTop();
  }
}

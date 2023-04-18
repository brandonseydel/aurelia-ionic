import { defineCustomElement } from "@ionic/core/components/ion-alert";
import { type AlertOptions, alertController } from "@ionic/core/components";

type AlertControllerType = typeof alertController;
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
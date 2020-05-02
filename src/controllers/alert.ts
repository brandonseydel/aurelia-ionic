import { alertController, AlertOptions } from "@ionic/core";

type AlertControllerType = typeof alertController;
export class AlertController implements AlertControllerType {
    private readonly controller: AlertControllerType;
    constructor() {
        this.controller = alertController;
    }
    create(options: AlertOptions): Promise<HTMLIonAlertElement> {
        return this.controller.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonAlertElement> {
        return this.controller.getTop();
    }
}
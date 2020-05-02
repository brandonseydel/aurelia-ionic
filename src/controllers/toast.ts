import { ToastOptions, toastController } from "@ionic/core";

type ToastControllerType = typeof toastController;

export class ToastController implements ToastControllerType {
    private readonly controller: ToastControllerType;
    constructor() {
        this.controller = toastController;
    }
    create(options: ToastOptions): Promise<HTMLIonToastElement> {
        return this.controller.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonToastElement> {
        return this.controller.getTop();
    }
}


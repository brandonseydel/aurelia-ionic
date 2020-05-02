import { modalController, ModalOptions } from "@ionic/core";

type ModalControllerType = typeof modalController;

export class ModalController implements ModalControllerType {
    private readonly controller: ModalControllerType;
    constructor() {
        this.controller = modalController;
    }
    create(options: ModalOptions): Promise<HTMLIonModalElement> {
        return this.controller.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonModalElement> {
        return this.controller.getTop();
    }
}


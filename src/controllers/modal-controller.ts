import { modalController, type ModalOptions, ComponentRef } from "@ionic/core/components";
import { defineCustomElement } from "@ionic/core/components/ion-modal";
import { AureliaDelegate } from "./framework-delegate";
import { inject } from "@aurelia/kernel";

type ModalControllerType = typeof modalController;

@inject()
export class ModalController implements ModalControllerType {

    constructor(private readonly delegate: AureliaDelegate) { }
    create<T extends ComponentRef>(options: ModalOptions<T>): Promise<HTMLIonModalElement> {
        defineCustomElement();
        return modalController.create(
            {
                ...options,
                delegate: this.delegate
            }
        );
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return modalController.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonModalElement | undefined> {
        return modalController.getTop();
    }
}


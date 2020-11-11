import { modalController, ModalOptions, ComponentRef } from "@ionic/core";
import { AureliaDelegate } from "./delegate";
import { inject } from "aurelia";

type ModalControllerType = typeof modalController;

@inject()
export class ModalController implements ModalControllerType {
    private readonly controller: ModalControllerType;
    constructor(private readonly delegate: AureliaDelegate) {
        this.controller = modalController;
    }
    create<T extends ComponentRef>(options: ModalOptions<T>): Promise<HTMLIonModalElement> {
        return this.controller.create(
            {
                ...options,
                delegate: this.delegate
            }

        );
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonModalElement> {
        return this.controller.getTop();
    }
}


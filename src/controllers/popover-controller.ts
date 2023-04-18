import { popoverController, type PopoverOptions } from "@ionic/core/components";
import { defineCustomElement } from "@ionic/core/components/ion-popover";
import { AureliaDelegate } from "./framework-delegate";
import { inject } from "@aurelia/kernel";

type PopoverControllerType = typeof popoverController;

@inject()
export class PopoverController implements PopoverControllerType {

    constructor(private readonly delegate: AureliaDelegate) { }

    create(options: PopoverOptions): Promise<HTMLIonPopoverElement> {
        defineCustomElement();
        return popoverController.create({ ...options, delegate: this.delegate });
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return popoverController.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonPopoverElement | undefined> {
        return popoverController.getTop();
    }
}
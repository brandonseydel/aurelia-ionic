import { popoverController, PopoverOptions } from "@ionic/core";

type PopoverControllerType = typeof popoverController;

export class PopoverController implements PopoverControllerType {
    private readonly controller: PopoverControllerType;
    constructor() {
        this.controller = popoverController;
    }
    create(options: PopoverOptions): Promise<HTMLIonPopoverElement> {
        return this.controller.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonPopoverElement> {
        return this.controller.getTop();
    }
}


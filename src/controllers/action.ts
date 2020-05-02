import { actionSheetController, ActionSheetOptions } from "@ionic/core";

type ActionSheetControllerType = typeof actionSheetController;

export class ActionSheetController implements ActionSheetControllerType {
    private readonly controller: ActionSheetControllerType;
    constructor() {
        this.controller = actionSheetController;
    }
    create(options: ActionSheetOptions): Promise<HTMLIonActionSheetElement> {
        return this.controller.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonActionSheetElement> {
        return this.controller.getTop();
    }
}


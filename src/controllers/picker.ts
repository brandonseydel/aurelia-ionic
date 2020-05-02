import { pickerController, PickerOptions } from "@ionic/core";

type PickerControllerType = typeof pickerController;

export class PickerController implements PickerControllerType {
    private readonly controller: PickerControllerType;
    constructor() {
        this.controller = pickerController;
    }
    create(options: PickerOptions): Promise<HTMLIonPickerElement> {
        return this.controller.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonPickerElement> {
        return this.controller.getTop();
    }
}


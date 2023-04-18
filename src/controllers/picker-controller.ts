import { pickerController, type PickerOptions } from "@ionic/core/components";
import { defineCustomElement } from "@ionic/core/components/ion-picker";

type PickerControllerType = typeof pickerController;

export class PickerController implements PickerControllerType {
    create(options: PickerOptions): Promise<HTMLIonPickerElement> {
        defineCustomElement();
        return pickerController.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return pickerController.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonPickerElement | undefined> {
        return pickerController.getTop();
    }
}


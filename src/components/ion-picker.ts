import { defineCustomElement as definePicker } from '@ionic/core/components/ion-picker';
import { type Components } from '@ionic/core/components';

export type IonPicker = Components.IonPicker;
export const IonPicker = {
  register() {
    definePicker();
  },
};

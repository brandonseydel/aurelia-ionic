import { defineCustomElement as defineCheckbox } from '@ionic/core/components/ion-checkbox';
import { type Components } from '@ionic/core/components';

export type IonCheckbox = Components.IonCheckbox;
export const IonCheckbox = {
  register() {
    defineCheckbox();
  },
};

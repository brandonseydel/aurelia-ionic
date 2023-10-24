import { defineCustomElement as defineInput } from '@ionic/core/components/ion-input';
import { type Components } from '@ionic/core/components';

export type IonInput = Components.IonInput;
export const IonInput = {
  register() {
    defineInput();
  },
};

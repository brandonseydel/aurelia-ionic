import { defineCustomElement as defineRadio } from '@ionic/core/components/ion-radio';
import { type Components } from '@ionic/core/components';

export type IonRadio = Components.IonRadio;
export const IonRadio = {
  register() {
    defineRadio();
  },
};

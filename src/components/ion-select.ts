import { defineCustomElement as defineSelect } from '@ionic/core/components/ion-select';
import { type Components } from '@ionic/core/components';

export type IonSelect = Components.IonSelect;
export const IonSelect = {
  register() {
    defineSelect();
  },
};

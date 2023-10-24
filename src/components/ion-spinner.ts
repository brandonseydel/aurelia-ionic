import { defineCustomElement as defineSpinner } from '@ionic/core/components/ion-spinner';
import { type Components } from '@ionic/core/components';

export type IonSpinner = Components.IonSpinner;
export const IonSpinner = {
  register() {
    defineSpinner();
  },
};

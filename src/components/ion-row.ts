import { defineCustomElement as defineRow } from '@ionic/core/components/ion-row';
import { type Components } from '@ionic/core/components';

export type IonRow = Components.IonRow;
export const IonRow = {
  register() {
    defineRow();
  },
};

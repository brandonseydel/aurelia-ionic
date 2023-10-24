import { defineCustomElement as defineCol } from '@ionic/core/components/ion-col';
import { type Components } from '@ionic/core/components';

export type IonCol = Components.IonCol;
export const IonCol = {
  register() {
    defineCol();
  },
};

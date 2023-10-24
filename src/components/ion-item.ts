import { defineCustomElement as defineItem } from '@ionic/core/components/ion-item';
import { type Components } from '@ionic/core/components';

export type IonItem = Components.IonItem;
export const IonItem = {
  register() {
    defineItem();
  },
};

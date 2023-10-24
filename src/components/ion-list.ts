import { defineCustomElement as defineList } from '@ionic/core/components/ion-list';
import { type Components } from '@ionic/core/components';

export type IonList = Components.IonList;
export const IonList = {
  register() {
    defineList();
  },
};

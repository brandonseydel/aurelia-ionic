import { defineCustomElement as defineItemGroup } from '@ionic/core/components/ion-item-group';
import { type Components } from '@ionic/core/components';

export type IonItemGroup = Components.IonItemGroup;
export const IonItemGroup = {
  register() {
    defineItemGroup();
  },
};

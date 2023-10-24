import { defineCustomElement as defineReorderGroup } from '@ionic/core/components/ion-reorder-group';
import { type Components } from '@ionic/core/components';

export type IonReorderGroup = Components.IonReorderGroup;
export const IonReorderGroup = {
  register() {
    defineReorderGroup();
  },
};

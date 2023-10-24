import { defineCustomElement as defineReorder } from '@ionic/core/components/ion-reorder';
import { type Components } from '@ionic/core/components';

export type IonReorder = Components.IonReorder;
export const IonReorder = {
  register() {
    defineReorder();
  },
};

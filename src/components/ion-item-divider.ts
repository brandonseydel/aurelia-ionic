import { defineCustomElement as defineItemDivider } from '@ionic/core/components/ion-item-divider';
import { type Components } from '@ionic/core/components';

export type IonItemDivider = Components.IonItemDivider;
export const IonItemDivider = {
  register() {
    defineItemDivider();
  },
};

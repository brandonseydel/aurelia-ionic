import { defineCustomElement as defineItemSliding } from '@ionic/core/components/ion-item-sliding';
import { type Components } from '@ionic/core/components';

export type IonItemSliding = Components.IonItemSliding;
export const IonItemSliding = {
  register() {
    defineItemSliding();
  },
};

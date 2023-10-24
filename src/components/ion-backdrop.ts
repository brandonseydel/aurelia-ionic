import { defineCustomElement as defineBackgrop } from '@ionic/core/components/ion-backdrop';
import { type Components } from '@ionic/core/components';

export type IonBackdrop = Components.IonBackdrop;
export const IonBackdrop = {
  register() {
    defineBackgrop();
  },
};

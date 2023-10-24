import { defineCustomElement as defineFooter } from '@ionic/core/components/ion-footer';
import { type Components } from '@ionic/core/components';

export type IonFooter = Components.IonFooter;
export const IonFooter = {
  register() {
    defineFooter();
  },
};

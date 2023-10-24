import { defineCustomElement as defineToast } from '@ionic/core/components/ion-toast';
import { type Components } from '@ionic/core/components';

export type IonToast = Components.IonToast;
export const IonToast = {
  register() {
    defineToast();
  },
};

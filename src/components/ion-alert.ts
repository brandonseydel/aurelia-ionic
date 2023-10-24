import { defineCustomElement as defineAlert } from '@ionic/core/components/ion-alert';
import { type Components } from '@ionic/core/components';

export type IonAlert = Components.IonAlert;
export const IonAlert = {
  register() {
    defineAlert();
  },
};

import { defineCustomElement as defineAlert } from '@ionic/core/components/ion-alert';

export const IonAlert = {
  register() {
    defineAlert();
  },
};

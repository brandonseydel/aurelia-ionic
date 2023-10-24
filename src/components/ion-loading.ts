import { defineCustomElement as defineLoading } from '@ionic/core/components/ion-loading';
import { type Components } from '@ionic/core/components';

export type IonLoading = Components.IonLoading;
export const IonLoading = {
  register() {
    defineLoading();
  },
};

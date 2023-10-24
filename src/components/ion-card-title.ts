import { defineCustomElement as defineCardTitle } from '@ionic/core/components/ion-card-title';
import { type Components } from '@ionic/core/components';

export type IonCardTitle = Components.IonCardTitle;
export const IonCardTitle = {
  register() {
    defineCardTitle();
  },
};

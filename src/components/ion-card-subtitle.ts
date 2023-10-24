import { defineCustomElement as defineCardSubtitle } from '@ionic/core/components/ion-card-subtitle';
import { type Components } from '@ionic/core/components';

export type IonCardSubtitle = Components.IonCardSubtitle;
export const IonCardSubtitle = {
  register() {
    defineCardSubtitle();
  },
};

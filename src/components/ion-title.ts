import { defineCustomElement as defineTitle } from '@ionic/core/components/ion-title';
import { type Components } from '@ionic/core/components';

export type IonTitle = Components.IonTitle;
export const IonTitle = {
  register() {
    defineTitle();
  },
};

import { defineCustomElement as defineCardHeader } from '@ionic/core/components/ion-card-header';
import { type Components } from '@ionic/core/components';

export type IonCardHeader = Components.IonCardHeader;
export const IonCardHeader = {
  register() {
    defineCardHeader();
  },
};

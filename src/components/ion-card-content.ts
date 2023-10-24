import { defineCustomElement as defineCardContent } from '@ionic/core/components/ion-card-content';
import { type Components } from '@ionic/core/components';

export type IonCardContent = Components.IonCardContent;
export const IonCardContent = {
  register() {
    defineCardContent();
  },
};

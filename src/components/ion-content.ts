import { defineCustomElement as defineContent } from '@ionic/core/components/ion-content';
import { type Components } from '@ionic/core/components';

export type IonContent = Components.IonContent;
export const IonContent = {
  register() {
    defineContent();
  },
};

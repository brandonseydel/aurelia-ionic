import { defineCustomElement as defineText } from '@ionic/core/components/ion-text';
import { type Components } from '@ionic/core/components';

export type IonText = Components.IonText;
export const IonText = {
  register() {
    defineText();
  },
};

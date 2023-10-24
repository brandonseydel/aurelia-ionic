import { defineCustomElement as defineBackButton } from '@ionic/core/components/ion-back-button';
import { type Components } from '@ionic/core/components';

export type IonBackButton = Components.IonBackButton;
export const IonBackButton = {
  register() {
    defineBackButton();
  },
};

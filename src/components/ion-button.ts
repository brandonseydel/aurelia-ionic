import { defineCustomElement as defineButton } from '@ionic/core/components/ion-button';
import { type Components } from '@ionic/core/components';

export type IonButton = Components.IonButton;
export const IonButton = {
  register() {
    defineButton();
  },
};

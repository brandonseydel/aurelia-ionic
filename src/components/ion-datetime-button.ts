import { defineCustomElement as defineDatetimeButton } from '@ionic/core/components/ion-datetime-button';
import { type Components } from '@ionic/core/components';

export type IonDatetimeButton = Components.IonDatetimeButton;
export const IonDatetimeButton = {
  register() {
    defineDatetimeButton();
  },
};

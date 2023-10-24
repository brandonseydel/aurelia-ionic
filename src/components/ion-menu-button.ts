import { defineCustomElement as defineMenuButton } from '@ionic/core/components/ion-menu-button';
import { type Components } from '@ionic/core/components';

export type IonMenuButton = Components.IonMenuButton;
export const IonMenuButton = {
  register() {
    defineMenuButton();
  },
};

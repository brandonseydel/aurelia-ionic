import { defineCustomElement as defineMenuToggle } from '@ionic/core/components/ion-menu-toggle';
import { type Components } from '@ionic/core/components';

export type IonMenuToggle = Components.IonMenuToggle;
export const IonMenuToggle = {
  register() {
    defineMenuToggle();
  },
};

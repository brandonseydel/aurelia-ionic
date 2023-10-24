import { defineCustomElement as defineNav } from '@ionic/core/components/ion-nav';
import { type Components } from '@ionic/core/components';

export type IonNav = Components.IonNav;
export const IonNav = {
  register() {
    defineNav();
  },
};

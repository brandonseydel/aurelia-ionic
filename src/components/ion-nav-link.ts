import { defineCustomElement as defineNavLink } from '@ionic/core/components/ion-nav-link';
import { type Components } from '@ionic/core/components';

export type IonNavLink = Components.IonNavLink;
export const IonNavLink = {
  register() {
    defineNavLink();
  },
};

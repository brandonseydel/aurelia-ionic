import { defineCustomElement as defineToolbar } from '@ionic/core/components/ion-toolbar';
import { type Components } from '@ionic/core/components';

export type IonToolbar = Components.IonToolbar;
export const IonToolbar = {
  register() {
    defineToolbar();
  },
};

import { defineCustomElement as defineTabButton } from '@ionic/core/components/ion-tab-button';
import { type Components } from '@ionic/core/components';

export type IonTabButton = Components.IonTabButton;
export const IonTabButton = {
  register() {
    defineTabButton();
  },
};

import { defineCustomElement as defineFabButton } from '@ionic/core/components/ion-fab-button';
import { type Components } from '@ionic/core/components';

export type IonFabButton = Components.IonFabButton;
export const IonFabButton = {
  register() {
    defineFabButton();
  },
};

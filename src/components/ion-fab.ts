import { defineCustomElement as defineFab } from '@ionic/core/components/ion-fab';
import { type Components } from '@ionic/core/components';

export type IonFab = Components.IonFab;
export const IonFab = {
  register() {
    defineFab();
  },
};

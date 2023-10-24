import { defineCustomElement as defineRefresher } from '@ionic/core/components/ion-refresher';
import { type Components } from '@ionic/core/components';

export type IonRefresher = Components.IonRefresher;
export const IonRefresher = {
  register() {
    defineRefresher();
  },
};

import { defineCustomElement as defineRefresherConent } from '@ionic/core/components/ion-refresher-content';
import { type Components } from '@ionic/core/components';

export type IonRefresherContent = Components.IonRefresherContent;
export const IonRefresherContent = {
  register() {
    defineRefresherConent();
  },
};

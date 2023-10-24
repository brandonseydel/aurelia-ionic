import { defineCustomElement as defineFabList } from '@ionic/core/components/ion-fab-list';
import { type Components } from '@ionic/core/components';

export type IonFabList = Components.IonFabList;
export const IonFabList = {
  register() {
    defineFabList();
  },
};

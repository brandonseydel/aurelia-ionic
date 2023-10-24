import { defineCustomElement as defineTabBar } from '@ionic/core/components/ion-tab-bar';
import { type Components } from '@ionic/core/components';

export type IonTabBar = Components.IonTabBar;
export const IonTabBar = {
  register() {
    defineTabBar();
  },
};

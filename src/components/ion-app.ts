import { defineCustomElement as defineApp } from '@ionic/core/components/ion-app';
import { type Components } from '@ionic/core/components';

export type IonApp = Components.IonApp;
export const IonApp = {
  register() {
    defineApp();
  },
};

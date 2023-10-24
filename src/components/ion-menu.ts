import { defineCustomElement as defineMenu } from '@ionic/core/components/ion-menu';
import { type Components } from '@ionic/core/components';

export type IonMenu = Components.IonMenu;
export const IonMenu = {
  register() {
    defineMenu();
  },
};

import { defineCustomElement as defineListHeader } from '@ionic/core/components/ion-list-header';
import { type Components } from '@ionic/core/components';

export type IonListHeader = Components.IonListHeader;
export const IonListHeader = {
  register() {
    defineListHeader();
  },
};

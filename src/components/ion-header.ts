import { defineCustomElement as defineHeader } from '@ionic/core/components/ion-header';
import { type Components } from '@ionic/core/components';

export type IonHeader = Components.IonHeader;
export const IonHeader = {
  register() {
    defineHeader();
  },
};

import { defineCustomElement as defineDatetime } from '@ionic/core/components/ion-datetime';
import { type Components } from '@ionic/core/components';

export type IonDatetime = Components.IonDatetime;
export const IonDatetime = {
  register() {
    defineDatetime();
  },
};

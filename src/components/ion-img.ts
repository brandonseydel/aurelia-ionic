import { defineCustomElement as defineImg } from '@ionic/core/components/ion-img';
import { type Components } from '@ionic/core/components';

export type IonImg = Components.IonImg;
export const IonImg = {
  register() {
    defineImg();
  },
};

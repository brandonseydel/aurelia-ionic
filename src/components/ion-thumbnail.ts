import { defineCustomElement as defineThumbnail } from '@ionic/core/components/ion-thumbnail';
import { type Components } from '@ionic/core/components';

export type IonThumbnail = Components.IonThumbnail;
export const IonThumbnail = {
  register() {
    defineThumbnail();
  },
};

import { defineCustomElement as defineLabel } from '@ionic/core/components/ion-label';
import { type Components } from '@ionic/core/components';

export type IonLabel = Components.IonLabel;
export const IonLabel = {
  register() {
    defineLabel();
  },
};

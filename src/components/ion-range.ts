import { defineCustomElement as defineRange } from '@ionic/core/components/ion-range';
import { type Components } from '@ionic/core/components';

export type IonRange = Components.IonRange;
export const IonRange = {
  register() {
    defineRange();
  },
};

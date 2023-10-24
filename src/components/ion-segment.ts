import { defineCustomElement as defineSegment } from '@ionic/core/components/ion-segment';
import { type Components } from '@ionic/core/components';

export type IonSegment = Components.IonSegment;
export const IonSegment = {
  register() {
    defineSegment();
  },
};

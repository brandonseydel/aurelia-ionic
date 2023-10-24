import { defineCustomElement as defineSegmentButton } from '@ionic/core/components/ion-segment-button';
import { type Components } from '@ionic/core/components';

export type IonSegmentButton = Components.IonSegmentButton;
export const IonSegmentButton = {
  register() {
    defineSegmentButton();
  },
};

import { defineCustomElement as defineChip } from '@ionic/core/components/ion-chip';
import { type Components } from '@ionic/core/components';

export type IonChip = Components.IonChip;
export const IonChip = {
  register() {
    defineChip();
  },
};

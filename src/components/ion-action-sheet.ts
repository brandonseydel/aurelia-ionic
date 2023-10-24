import { defineCustomElement as defineAction } from '@ionic/core/components/ion-action-sheet';
import { type Components } from '@ionic/core/components';

export type IonActionSheet = Components.IonActionSheet;
export const IonActionSheet = {
  register() {
    defineAction();
  },
};

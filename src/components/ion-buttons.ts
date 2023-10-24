import { defineCustomElement as defineButtons } from '@ionic/core/components/ion-buttons';
import { type Components } from '@ionic/core/components';

export type IonButtons = Components.IonButtons;
export const IonButtons = {
  register() {
    defineButtons();
  },
};

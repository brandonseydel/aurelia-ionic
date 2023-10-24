import { defineCustomElement as defineToggle } from '@ionic/core/components/ion-toggle';
import { type Components } from '@ionic/core/components';

export type IonToggle = Components.IonToggle;
export const IonToggle = {
  register() {
    defineToggle();
  },
};

import { defineCustomElement as defineProgress } from '@ionic/core/components/ion-progress-bar';
import { type Components } from '@ionic/core/components';

export type IonProgressBar = Components.IonProgressBar;
export const IonProgressBar = {
  register() {
    defineProgress();
  },
};

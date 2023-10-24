import { defineCustomElement as defineIcon } from 'ionicons/components/ion-icon';
import { type Components } from '@ionic/core/components';

export type IonIcon = Components.IonIcon;
export const IonIcon = {
  register() {
    defineIcon();
  },
};

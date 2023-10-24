import { defineCustomElement as defineBadge } from '@ionic/core/components/ion-badge';
import { type Components } from '@ionic/core/components';

export type IonBadge = Components.IonBadge;
export const IonBadge = {
  register() {
    defineBadge();
  },
};

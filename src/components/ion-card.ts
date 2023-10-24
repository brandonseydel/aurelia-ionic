import { defineCustomElement as defineCard } from '@ionic/core/components/ion-card';
import { type Components } from '@ionic/core/components';

export type IonCard = Components.IonCard;
export const IonCard = {
  register() {
    defineCard();
  },
};

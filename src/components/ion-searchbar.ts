import { defineCustomElement as defineSearchbar } from '@ionic/core/components/ion-searchbar';
import { type Components } from '@ionic/core/components';

export type IonSearchbar = Components.IonSearchbar;
export const IonSearchbar = {
  register() {
    defineSearchbar();
  },
};

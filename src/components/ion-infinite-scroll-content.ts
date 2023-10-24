import { defineCustomElement as defineInfiniteScrollContent } from '@ionic/core/components/ion-infinite-scroll-content';
import { type Components } from '@ionic/core/components';

export type IonInfiniteScrollContent = Components.IonInfiniteScrollContent;
export const IonInfiniteScrollContent = {
  register() {
    defineInfiniteScrollContent();
  },
};

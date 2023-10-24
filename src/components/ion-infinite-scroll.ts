import { defineCustomElement as defineInfiniteScroll } from '@ionic/core/components/ion-infinite-scroll';
import { type Components } from '@ionic/core/components';

export type IonInfiniteScroll = Components.IonInfiniteScroll;
export const IonInfiniteScroll = {
  register() {
    defineInfiniteScroll();
  },
};

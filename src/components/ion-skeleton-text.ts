import { defineCustomElement as defineSkeleton } from '@ionic/core/components/ion-skeleton-text';
import { type Components } from '@ionic/core/components';

export type IonSkeletonText = Components.IonSkeletonText;
export const IonSkeletonText = {
  register() {
    defineSkeleton();
  },
};

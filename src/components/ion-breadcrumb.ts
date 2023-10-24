import { defineCustomElement as defineBreadcrumb } from '@ionic/core/components/ion-breadcrumb';
import { type Components } from '@ionic/core/components';

export type IonBreadcrumb = Components.IonBreadcrumb;
export const IonBreadcrumb = {
  register() {
    defineBreadcrumb();
  },
};

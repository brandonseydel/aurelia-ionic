import { defineCustomElement as defineBreadcrumbs } from '@ionic/core/components/ion-breadcrumbs';
import { type Components } from '@ionic/core/components';

export type IonBreadcrumbs = Components.IonBreadcrumbs;
export const IonBreadcrumbs = {
  register() {
    defineBreadcrumbs();
  },
};

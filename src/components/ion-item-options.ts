import { defineCustomElement as defineItemOptions } from '@ionic/core/components/ion-item-options';
import { type Components } from '@ionic/core/components';

export type IonItemOptions = Components.IonItemOptions;
export const IonItemOptions = {
  register() {
    defineItemOptions();
  },
};

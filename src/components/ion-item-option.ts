import { defineCustomElement as defineItemOption } from '@ionic/core/components/ion-item-option';
import { type Components } from '@ionic/core/components';

export type IonItemOption = Components.IonItemOption;
export const IonItemOption = {
  register() {
    defineItemOption();
  },
};

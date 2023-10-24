import { defineCustomElement as defineSelectOption } from '@ionic/core/components/ion-select-option';
import { type Components } from '@ionic/core/components';

export type IonSelectOption = Components.IonSelectOption;
export const IonSelectOption = {
  register() {
    defineSelectOption();
  },
};

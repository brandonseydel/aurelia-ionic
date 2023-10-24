import { defineCustomElement as defineRadioGroup } from '@ionic/core/components/ion-radio-group';
import { type Components } from '@ionic/core/components';

export type IonRadioGroup = Components.IonRadioGroup;
export const IonRadioGroup = {
  register() {
    defineRadioGroup();
  },
};

import { defineCustomElement as defineAccordion } from '@ionic/core/components/ion-accordion';
import { type Components } from '@ionic/core/components';

export type IonAccordion = Components.IonAccordion;
export const IonAccordion = {
  register() {
    defineAccordion();
  },
};

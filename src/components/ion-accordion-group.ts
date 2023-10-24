import { defineCustomElement as defineAccordionGroup } from '@ionic/core/components/ion-accordion-group';
import { type Components } from '@ionic/core/components';

export type IonAccordionGroup = Components.IonAccordionGroup;
export const IonAccordionGroup = {
  register() {
    defineAccordionGroup();
  },
};

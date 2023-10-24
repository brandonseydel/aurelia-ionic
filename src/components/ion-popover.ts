import { defineCustomElement as definePopover } from '@ionic/core/components/ion-popover';
import { type Components } from '@ionic/core/components';

export type IonPopover = Components.IonPopover;
export const IonPopover = {
  register() {
    definePopover();
  },
};

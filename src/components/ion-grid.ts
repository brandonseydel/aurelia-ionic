import { defineCustomElement as defineGrid } from '@ionic/core/components/ion-grid';
import { type Components } from '@ionic/core/components';

export type IonGrid = Components.IonGrid;
export const IonGrid = {
  register() {
    defineGrid();
  },
};

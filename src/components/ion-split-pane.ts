import { defineCustomElement as defineSplit } from '@ionic/core/components/ion-split-pane';
import { type Components } from '@ionic/core/components';

export type IonSplitPane = Components.IonSplitPane;
export const IonSplitPane = {
  register() {
    defineSplit();
  },
};

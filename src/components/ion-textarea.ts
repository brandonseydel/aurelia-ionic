import { defineCustomElement as defineTextarea } from '@ionic/core/components/ion-textarea';
import { type Components } from '@ionic/core/components';

export type IonTextarea = Components.IonTextarea;
export const IonTextarea = {
  register() {
    defineTextarea();
  },
};

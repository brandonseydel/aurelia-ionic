import { defineCustomElement as defineNote } from '@ionic/core/components/ion-note';
import { type Components } from '@ionic/core/components';

export type IonNote = Components.IonNote;
export const IonNote = {
  register() {
    defineNote();
  },
};

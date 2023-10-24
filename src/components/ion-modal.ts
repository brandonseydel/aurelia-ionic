import { defineCustomElement as defineModal } from '@ionic/core/components/ion-modal';
import { type Components } from '@ionic/core/components';

export type IonModal = Components.IonModal;
export const IonModal = {
  register() {
    defineModal();
  },
};


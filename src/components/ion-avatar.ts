import { defineCustomElement as defineAvatar } from '@ionic/core/components/ion-avatar';
import { type Components } from '@ionic/core/components';

export type IonAvatar = Components.IonAvatar;
export const IonAvatar = {
  register() {
    defineAvatar();
  },
};

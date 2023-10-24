import { defineCustomElement as defineRipple } from '@ionic/core/components/ion-ripple-effect';
import { type Components } from '@ionic/core/components';

export type IonRippleEffect = Components.IonRippleEffect;
export const IonRippleEffect = {
  register() {
    defineRipple();
  },
};

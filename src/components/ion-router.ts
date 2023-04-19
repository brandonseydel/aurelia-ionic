import { IContainer, Registration } from '@aurelia/kernel';
import { LoadCustomAttribute, ViewportCustomElement } from '@aurelia/router-lite';
import { CustomAttribute, CustomElement } from '@aurelia/runtime-html';

export const IonRouter = {
  register(container: IContainer) {
    container.register(Registration.aliasTo(LoadCustomAttribute, CustomAttribute.keyFrom('router-link')), Registration.aliasTo(ViewportCustomElement, CustomElement.keyFrom('ion-router-outlet')));
  },
};

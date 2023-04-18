import { CustomElement, Registration } from 'aurelia';
import { ViewportCustomElement } from '@aurelia/router-lite';


export const IonRouter = {
    register() {
        Registration.aliasTo(ViewportCustomElement, CustomElement.keyFrom('ion-router-outlet'));
    }
};

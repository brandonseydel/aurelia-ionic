import { customElement } from "@aurelia/runtime-html";

@customElement({template: `<div class="ion-page" ...$attrs></div>`, name:'ion-page',capture: true, containerless: true  })
export class IonPage{

}
import { IRouter } from "@aurelia/router-lite";
import { customElement } from "aurelia";

@customElement({name:'folder', containerless: true, template:`



<ion-page>
<ion-header :translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button color="primary"></ion-menu-button>
    </ion-buttons>
    <ion-title>\${ id }</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content :fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">\${id }</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <strong class="capitalize">\${ id }</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</ion-content>
</ion-page>

`})
export class Folder{


    constructor(@IRouter private router:IRouter){
    }

    get id(){
        console.log(this.router.currentTr.finalInstructions.children[0])
        return this.router.currentTr.finalInstructions.children[0].recognizedRoute?.route.params.id

    }

}
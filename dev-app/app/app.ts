import { ModalController } from "../../src/controllers/modal";

import { IViewModel, inject } from "aurelia";
import { IRouter } from "@aurelia/router";

export class App implements IViewModel {
  app: Element;
  constructor(
    @IRouter private readonly router: IRouter,
    private readonly modalController: ModalController,
  ) { }

}
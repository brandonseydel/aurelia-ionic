import { IContainer, IDisposable, Registration } from "@aurelia/kernel";
import { BackButtonEvent } from "@ionic/core";

export class Backbutton implements IDisposable {
  public handler?: (event: BackButtonEvent) => void = undefined;
  private _handler = (event:BackButtonEvent) => this.handler?.(event)

  constructor() {
      document.addEventListener("ionBackButton", this._handler);
  }

  static register(container: IContainer) {
    container.register(Registration.transient(Backbutton, Backbutton));
  }

  dispose(): void {
    document.removeEventListener("ionBackButton", this._handler);
  }
}

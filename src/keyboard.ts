import { IContainer, IDisposable, Registration } from "@aurelia/kernel";

export class Keyboard implements IDisposable {
  public isOpen = false;
  public keyboardHeight = 0;

  constructor() {
    if (typeof (window as any) !== "undefined") {
      window.addEventListener("ionKeyboardDidShow", this.showCallback);
      window.addEventListener("ionKeyboardDidHide", this.hideCallback);
    }
  }

  showCallback = (ev: CustomEvent) => {
    this.isOpen = true;
    this.keyboardHeight = ev.detail.keyboardHeight;
  };

  hideCallback = () => {
    this.isOpen = false;
    this.keyboardHeight = 0;
  };

  static register(container: IContainer) {
    container.register(Registration.transient(Keyboard, Keyboard));
  }

  dispose(): void {
    if (typeof (window as any) !== "undefined") {
      window.addEventListener("ionKeyboardDidShow", this.showCallback);
      window.addEventListener("ionKeyboardDidHide", this.hideCallback);
    }
  }
}

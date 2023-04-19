import { IContainer, Registration } from '@aurelia/kernel';

import { createGesture, type Gesture, type GestureConfig } from '@ionic/core/components';

export class GestureController {
  create(opts: GestureConfig): Gesture {
    return createGesture(opts);
  }
  static register(container: IContainer) {
    container.register(Registration.singleton(GestureController, GestureController));
  }
}

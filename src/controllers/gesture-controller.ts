import { singleton } from '@aurelia/kernel';

import { createGesture, type Gesture, type GestureConfig } from '@ionic/core/components';

@singleton()
export class GestureController {
  create(opts: GestureConfig): Gesture {
    return createGesture(opts);
  }
}

import { createGesture, type Gesture, type GestureConfig } from '@ionic/core/components';

export class GestureController {
  create(opts: GestureConfig): Gesture {
    return createGesture(opts);
  }
}

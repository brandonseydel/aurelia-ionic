import { type Gesture, type GestureConfig, createGesture } from "@ionic/core/dist/types/utils/gesture";

export class GestureController {
  constructor() {}
 
  create(opts: GestureConfig): Gesture {
    return createGesture(opts);
  }
}
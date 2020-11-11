import { GestureConfig, Gesture, createGesture } from "@ionic/core";

export class GestureController {
    create(opts: GestureConfig): Gesture {

        return createGesture(opts);
    }
}


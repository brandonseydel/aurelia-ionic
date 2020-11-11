import { Animation, createAnimation, getTimeGivenProgression } from '@ionic/core';

export class AnimationController {
    create(animationId?: string): Animation {
        return createAnimation(animationId);
    }

    easingTime(p0: number[], p1: number[], p2: number[], p3: number[], progression: number): number[] {
        return getTimeGivenProgression(p0, p1, p2, p3, progression);
    }
}


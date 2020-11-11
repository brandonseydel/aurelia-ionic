import { MenuController } from './controllers/menu';
import { AureliaDelegate } from './controllers/delegate';
import { IRegistry, IContainer } from '@aurelia/kernel';
import { applyPolyfills, defineCustomElements } from '@ionic/core/loader';
import { addIcons } from 'ionicons';
import { arrowBackSharp, chevronBack, chevronForward, closeCircle, closeSharp, menuOutline, menuSharp, reorderTwoSharp, reorderThreeOutline, searchOutline, searchSharp, close,  caretBackSharp } from 'ionicons/icons';
import 'global.scss';
import { Registration, bindingCommand, BindingCommandInstance, getTarget, DI } from 'aurelia';
import { ActionSheetController, AlertController, LoadingController, ModalController, PickerController, PopoverController, ToastController } from './controllers';
import { BindingType, IsBindingBehavior } from '@aurelia/runtime';
import { AttributeInstruction, PlainAttributeSymbol, BindingSymbol, ListenerBindingInstruction, DelegationStrategy } from '@aurelia/runtime-html';
import { AnimationController } from './controllers/animation';
import { GestureController } from './controllers/gesture';

export const InternalIcons: IonicFrameworkConfig['iconsToAdd'] = {
    'arrow-back-sharp': arrowBackSharp,
    'caret-back-sharp': caretBackSharp,
    'chevron-back': chevronBack,
    'chevron-forward': chevronForward,
    'close': close,
    'close-circle': closeCircle,
    'close-sharp': closeSharp,
    'menu-outline': menuOutline,
    'menu-sharp': menuSharp,
    'reorder-two-sharp': reorderTwoSharp,
    'reorder-three-outline': reorderThreeOutline,
    'search-outline': searchOutline,
    'search-sharp': searchSharp,
};

@bindingCommand('trigger')
export class IonTrigger implements BindingCommandInstance {
    public readonly bindingType: BindingType.TriggerCommand = BindingType.TriggerCommand;

    public compile(binding: PlainAttributeSymbol | BindingSymbol): AttributeInstruction {
        return new ListenerBindingInstruction(binding.expression as IsBindingBehavior,
            getTarget(binding, ((binding as BindingSymbol).bindable?.propName || (binding as PlainAttributeSymbol).syntax?.target).startsWith('ion') ? true : false), true, DelegationStrategy.none);
    }
}

@bindingCommand('delegate')
export class IonDelegateTrigger implements BindingCommandInstance {
  public readonly bindingType: BindingType.DelegateCommand = BindingType.DelegateCommand;

  public compile(binding: PlainAttributeSymbol | BindingSymbol): AttributeInstruction {
    return new ListenerBindingInstruction(binding.expression as IsBindingBehavior,
        getTarget(binding, ((binding as BindingSymbol).bindable?.propName || (binding as PlainAttributeSymbol).syntax?.target).startsWith('ion') ? true : false), false, DelegationStrategy.bubbling);
  }
}

export class IonicFramework implements IRegistry, IonicFrameworkConfig {
    iconsToAdd: Record<string, string>;
    static config(config?: (config: IonicFrameworkConfig) => void): IonicFramework {
        const instance = new IonicFramework();
        config && config(instance);
        return instance;
    }

    register(container: IContainer): void {
        console.info('%cRegistering Ionic Framework....', 'color:cyan;background-color:black;font-size:1.2em;');
        container.register(
            [
                Registration.singleton(ActionSheetController, ActionSheetController),
                Registration.singleton(AlertController, AlertController),
                Registration.singleton(GestureController, GestureController),
                Registration.singleton(AureliaDelegate, AureliaDelegate),
                Registration.singleton(AnimationController, AnimationController),
                Registration.singleton(LoadingController, LoadingController),
                Registration.singleton(MenuController, MenuController),
                Registration.singleton(ModalController, ModalController),
                Registration.singleton(PickerController, PickerController),
                Registration.singleton(PopoverController, PopoverController),
                Registration.singleton(ToastController, ToastController),
                IonTrigger,
                IonDelegateTrigger
            ]
        );
        applyPolyfills().then(() => defineCustomElements()).then(() => addIcons({ ...InternalIcons, ...this.iconsToAdd }));
    }
}

export interface IonicFrameworkConfig {
    iconsToAdd: Record<string, string>;
}

export * from 'ionicons/icons';
export * from './controllers';

// CORE TYPES
export {
    // Overlay Controllers
    alertController,
    actionSheetController,
    menuController,
    loadingController,
    pickerController,
    toastController,
  
    // Security
    IonicSafeString,
  
    // Platform
    isPlatform, Platforms, getPlatforms,
  
    // Gesture
    Gesture,
    GestureConfig,
    GestureDetail,
    createGesture,
  
    // Animations
    Animation,
    AnimationBuilder,
    AnimationCallbackOptions,
    AnimationDirection,
    AnimationFill,
    AnimationKeyFrames,
    AnimationLifecycle,
    createAnimation,
    iosTransitionAnimation,
    mdTransitionAnimation,
    getTimeGivenProgression,
  
    // Hardware Back Button
    BackButtonEvent
  } from '@ionic/core';
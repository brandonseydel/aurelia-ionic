import { IRegistry, IContainer } from '@aurelia/kernel';
import { applyPolyfills, defineCustomElements } from '@ionic/core/loader';
import { addIcons } from 'ionicons';
import { close, arrowBackSharp, chevronBack, paperPlane, chevronForward, closeCircle, closeSharp, menuOutline, menuSharp, reorderTwoSharp, reorderThreeOutline, searchOutline, searchSharp, add, pin, wine } from 'ionicons/icons';
import 'global.scss';
import { Registration } from 'aurelia';
import { ActionSheetController, AlertController, LoadingController, ModalController, PickerController, PopoverController, ToastController } from './controllers';

export class IonicFramework implements IRegistry, IonicFrameworkConfig {
    componentsToInclude?: string[];
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
                Registration.singleton(LoadingController, LoadingController),
                Registration.singleton(ModalController, ModalController),
                Registration.singleton(PickerController, PickerController),
                Registration.singleton(PopoverController, PopoverController),
                Registration.singleton(ToastController, ToastController),
            ]
        );

        applyPolyfills().then(() => defineCustomElements()).then(() =>
            addIcons({
                'arrow-back-sharp': arrowBackSharp,
                'chevron-back': chevronBack,
                'paper-plane': paperPlane,
                'chevron-forward': chevronForward,
                'close-circle': closeCircle,
                'close-sharp': closeSharp,
                'menu-outline': menuOutline,
                'menu-sharp': menuSharp,
                'reorder-two-sharp': reorderTwoSharp,
                'reorder-three-outline': reorderThreeOutline,
                'search-outline': searchOutline,
                'search-sharp': searchSharp,
                'add': add,
                'pin': pin,
                'close': close,
                'wine': wine
            }));
    }
}

export interface IonicFrameworkConfig {
    componentsToInclude?: string[];
}
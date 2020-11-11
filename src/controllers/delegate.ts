import { newInstanceForScope } from '@aurelia/kernel';
import { FrameworkDelegate } from "@ionic/core";
import { Constructable, LifecycleFlags, IContainer, inject, Controller, ILifecycle, CustomElement, IAurelia, } from "aurelia";
import { layersOutline } from "ionicons/icons";

@inject(IContainer)
export class AureliaDelegate implements FrameworkDelegate {

    constructor(readonly container: IContainer) {
    }

    async removeViewFromDom(container: any, component: HTMLDialogElement): Promise<void> {
        const customElement = CustomElement.for(component);
        await customElement.deactivate(customElement, null, LifecycleFlags.none);
    }

    async attachViewToDom(parentElement: HTMLElement, component: Constructable, opts?: object, classes?: string[]): Promise<HTMLElement> {
        const instance = this.container.get(component);
        const lifecycle = this.container.get(ILifecycle);
        const controller = Controller.forCustomElement(this.container.get(IAurelia).root, this.container, lifecycle, parentElement, null);

        try {
            Object.getOwnPropertyNames(CustomElement.getDefinition(component).bindables).filter(x => Object.getOwnPropertyNames(opts).indexOf(x) > -1).forEach(prop => {
                instance[prop] = opts[prop];
            });
        } catch { //noop
        }
        await controller.activate(controller, null, LifecycleFlags.none);
        return controller.host;
    }
}
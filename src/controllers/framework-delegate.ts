import { FrameworkDelegate } from "@ionic/core/components";
import { Controller, CustomElement, } from "@aurelia/runtime-html";
import { Constructable, IContainer, inject } from '@aurelia/kernel';

@inject(IContainer)
export class AureliaDelegate implements FrameworkDelegate {
    constructor(readonly container: IContainer) { }

    async removeViewFromDom(_: any, component: HTMLElement): Promise<void> {
        const customElement = CustomElement.for(component);
        await customElement.deactivate(customElement, null);
    }

    async attachViewToDom(parentElement: HTMLElement, component: Constructable, opts?: object, classes?: string[]): Promise<HTMLElement> {
        const controller = Controller.$el(this.container, component, parentElement, null);
        if (classes?.length) controller?.host.classList.add(...classes)
        if (!controller) return parentElement;

        if (opts) {
            try {
                Object.getOwnPropertyNames(CustomElement.getDefinition(component).bindables).filter(x => Object.getOwnPropertyNames(opts).indexOf(x) > -1).forEach(prop => {
                    controller[prop] = opts[prop];
                });
            } catch { //noop
            }
        }
        await controller.activate(controller, null);
        return controller.host;
    }
}
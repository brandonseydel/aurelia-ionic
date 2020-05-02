import { loadingController, LoadingOptions } from "@ionic/core";

type LoadingControllerType = typeof loadingController;

export class LoadingController implements LoadingControllerType {
    private readonly controller: LoadingControllerType;
    constructor() {
        this.controller = loadingController;
    }
    create(options: LoadingOptions): Promise<HTMLIonLoadingElement> {
        return this.controller.create(options);
    }
    dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
        return this.controller.dismiss(data, role, id);
    }
    getTop(): Promise<HTMLIonLoadingElement> {
        return this.controller.getTop();
    }
}


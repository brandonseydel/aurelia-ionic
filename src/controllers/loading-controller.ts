import { IContainer, Registration } from '@aurelia/kernel';

import { loadingController, LoadingOptions } from '@ionic/core/components';
import { defineCustomElement } from '@ionic/core/components/ion-loading';

type LoadingControllerType = typeof loadingController;

export class LoadingController implements LoadingControllerType {
  create(options: LoadingOptions): Promise<HTMLIonLoadingElement> {
    defineCustomElement();
    return loadingController.create(options);
  }
  dismiss(data?: unknown, role?: string, id?: string): Promise<boolean> {
    return loadingController.dismiss(data, role, id);
  }
  getTop(): Promise<HTMLIonLoadingElement | undefined> {
    return loadingController.getTop();
  }
  static register(container: IContainer) {
    container.register(Registration.singleton(LoadingController, LoadingController));
  }
}

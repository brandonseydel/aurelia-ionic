import { Login } from './login/login';
import { ModalController } from "./../src/controllers/modal";
import { IonicValidationResultPresenterService } from "./../src/ionic-validation-result-presenter-service";

import { SecureStoragePluginWeb } from "capacitor-secure-storage-plugin";

import {
  ValidationHtmlConfiguration,
  ValidationTrigger,
} from "@aurelia/validation-html";

import { Deploy, DeployClass } from "cordova-plugin-ionic";

import { App } from "./app/app";
import "./theme/variables.scss";
import "./main.scss";
import { IonicFramework } from "../src";
import Aurelia, {
  RouterConfiguration,
  Registration,
  ShortHandBindingSyntax,
  IRouter,
  PLATFORM,
} from "aurelia";

import { Plugins } from "@capacitor/core";
import Constants from './constants';
import { StandardConfiguration } from '@aurelia/runtime-html';

const load = async () => {

  const aurelia = new Aurelia()
    .register(
      IonicFramework.config(
        (x) =>
          (x.iconsToAdd = {
          })
      ),
      ShortHandBindingSyntax,
      Registration.instance(DeployClass, Deploy),
      RouterConfiguration.customize({ useUrlFragmentHash: true }),
      Registration.instance(
        SecureStoragePluginWeb,
        Plugins.SecureStoragePlugin
      ),
      Registration.transient(
        IonicValidationResultPresenterService,
        IonicValidationResultPresenterService
      ),
      StandardConfiguration,
      ValidationHtmlConfiguration.customize((x) => {
        x.DefaultTrigger = ValidationTrigger.change;
      }))
    .app({ component: App, host: PLATFORM.document.querySelector("my-app") });

  const router = aurelia.container.get(IRouter);
  const modalController = aurelia.container.get(ModalController);
  document.addEventListener("ionBackButton", async () => {
    if (await modalController.getTop()) {
      return;
    }

    if (router.navigation?.currentEntry?.index !== 0) {
      router.back();
    } else {
      Plugins.App.exitApp();
    }
  });


  if (Constants.isDev) {
    await aurelia.start();
  }
  else {
    Plugins.FirebaseCrashlytics.setEnabled({ enabled: true });

    await Deploy.checkForUpdate()
      .then(async (update) => {
        if (update.available) {
          await Deploy.downloadUpdate((progress) => {
            console.log(progress);
          });
          await Deploy.extractUpdate((progress) => {
            console.log(progress);
          });
          return await Deploy.reloadApp();
        }
        await aurelia.start();
      })
      .catch(async () => {
        await aurelia.start();
      });
  }


  window.onerror = (e) => {
    try {
      Plugins.FirebaseCrashlytics.recordException({
        message: JSON.stringify(e),
      });
      // eslint-disable-next-line no-empty
    } catch { }

    return false;
  };
};
load();
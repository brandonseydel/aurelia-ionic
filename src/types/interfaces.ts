import { type Config } from '@ionic/core/components';

export interface IonicGlobal {
  config?: Config;
  asyncQueue?: boolean;
}

export interface IonicWindow extends Window {
  Ionic: IonicGlobal;
}

export interface HTMLStencilElement extends HTMLElement {
  componentOnReady?(): Promise<this>;
  forceUpdate?(): void;
}

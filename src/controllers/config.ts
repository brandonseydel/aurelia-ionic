/* eslint-disable @typescript-eslint/no-explicit-any */
import { singleton } from '@aurelia/kernel';

import { IonicWindow } from '../types/interfaces';

import { type Config as CoreConfig, type IonicConfig } from '@ionic/core/components';

@singleton()
export class Config implements Omit<CoreConfig, 'm'> {
  config?: CoreConfig;

  constructor() {
    this.config = (window as any as IonicWindow).Ionic.config;
  }

  reset(configObj: IonicConfig): void {
    this.config?.reset(configObj);
  }

  set<T = any>(key: keyof IonicConfig, value: T): void {
    this.config?.set(key, value);
  }

  get<T = any>(key: keyof IonicConfig, fallback?: T): T {
    return this.config?.get(key, fallback) as T;
  }

  getBoolean(key: keyof IonicConfig, fallback?: boolean): boolean {
    return this.config?.getBoolean(key, fallback) ?? false;
  }

  getNumber(key: keyof IonicConfig, fallback?: number): number {
    return this.config?.getNumber(key, fallback) ?? 0;
  }
}

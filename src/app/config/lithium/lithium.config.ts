import { LitElement, unsafeCSS } from "lit";
import { RouteConfig, Router } from '@lit-labs/router';
import { SignalWatcher } from '@lit-labs/preact-signals';

import style from "./tailwind.global.css?inline";

const tailwindElement = unsafeCSS(style);

export const LithiumElement = (style?: any) =>
  class extends SignalWatcher(LitElement) {
    static styles = [tailwindElement, unsafeCSS(style)];

    public fire(data: any) {
      console.log(data);
    }
  };

export class LithiumModule extends SignalWatcher(LitElement) {
  static styles = [tailwindElement, unsafeCSS(style)];
};

export const LithiumEntry = (routes: RouteConfig[]) => class extends SignalWatcher(LitElement) {
  private router: Router = new Router(this, routes);

  render() {
    return this.router.outlet();
  }
}
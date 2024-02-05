import { LitElement, unsafeCSS } from "lit";
import { RouteConfig, Router } from '@lit-labs/router';
import { SignalWatcher } from '@lit-labs/preact-signals';

import style from "./tailwind.global.css?inline";
import { OutputEventOption } from "../interface/event.interface";

const tailwindElement = unsafeCSS(style);

export const LithiumElement = (style?: any) =>
  class extends SignalWatcher(LitElement) {
    static styles = [tailwindElement, unsafeCSS(style)];

    public output(
      name: string,
      data: any = undefined,
      options: OutputEventOption = { bubbles: true, composed: true }
    ) {
      this.dispatchEvent(new CustomEvent(name, {
        detail: data,
        bubbles: options?.bubbles ?? true,
        composed: options?.composed ?? true
      }));
    }
  };

export class LithiumModule extends LithiumElement() {};

export const LithiumEntry = (routes: RouteConfig[]) => class extends SignalWatcher(LitElement) {
  private router: Router = new Router(this, routes);

  render() {
    return this.router.outlet();
  }
}
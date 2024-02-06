import { LitElement, unsafeCSS } from "lit";
import { RouteConfig, Router } from "@lit-labs/router";
import { Context, ContextProvider } from "@lit/context";
import { SignalWatcher } from "@lit-labs/preact-signals";

import style from "./tailwind.global.css?inline";
import { OutputEventOption } from "../interface/event.interface";

const tailwindElement = unsafeCSS(style);

export const LithiumElement = (style?: any) =>
  class extends SignalWatcher(LitElement) {
    static styles = [tailwindElement, unsafeCSS(style)];

    public listen = (eventName: string, action: (e: CustomEvent) => void) => {
      this.addEventListener(eventName, (e: CustomEvent) => {
        action(e);
      });
    };

    public output(
      name: string,
      data: any = undefined,
      options: OutputEventOption = { bubbles: true, composed: true }
    ) {
      this.dispatchEvent(
        new CustomEvent(name, {
          detail: data,
          bubbles: options?.bubbles ?? true,
          composed: options?.composed ?? true,
        })
      );
    }
  };

export class LithiumModule extends LithiumElement() {}

export const LithiumEntry = (
  routes: RouteConfig[],
  globalContext?: {
    ctx: Context<symbol, unknown>;
    initialValue: any;
  }
) =>
  class extends SignalWatcher(LitElement) {
    private router: Router = new Router(this, routes);

    public ctxGlobal = new ContextProvider(this, {
      context: globalContext?.ctx ?? null,
      initialValue: globalContext?.initialValue ?? null,
    });

    public listen = (eventName: string, action: (e: CustomEvent) => void) => {
      this.addEventListener(eventName, (e: CustomEvent) => {
        action(e);
      });
    };

    render() {
      return this.router.outlet();
    }
  };

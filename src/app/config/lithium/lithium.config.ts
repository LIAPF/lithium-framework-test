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
  globalContexts?: { globalCtx: { name: string; ctx: Context<symbol, unknown>; initialValue: any }[] }
) =>
  class extends SignalWatcher(LitElement) {
    private router: Router = new Router(this, routes);

    public ctxGlobals: { [key: string]: ContextProvider<any, any> } = {};

    public listen = (eventName: string, action: (e: CustomEvent) => void) => {
      this.addEventListener(eventName, (e: CustomEvent) => {
        action(e);
      });
    };

    constructor() {
      super();
      
      if (globalContexts) {
        globalContexts.globalCtx.forEach((context) => {
          this.ctxGlobals[context.name] = new ContextProvider(this, {
            context: context.ctx ?? null,
            initialValue: context.initialValue ?? null,
          });
        });
      }
    }

    render() {
      return this.router.outlet();
    }
  };

import { LitElement } from "lit";
import { RouteConfig, Router } from "@lit-labs/router";
import { Context, ContextProvider } from "@lit/context";

export const LithiumEntry = (
  routes: RouteConfig[],
  globalContexts?: {
    globalCtx: {
      name: string;
      ctx: Context<symbol, unknown>;
      initialValue: any;
    }[];
  }
) =>
  class extends LitElement {
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

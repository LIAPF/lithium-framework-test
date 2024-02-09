import { LithiumEntry, component, html } from "@lithium/libs";
import { simpleContext } from "@core/contexts/simple-global.context";

import "@modules/home/home.module";

@component("app-entry")
export class AppEntry extends LithiumEntry(
  [{ path: "/*", render: () => html`<home-module />` }],
  { globalCtx: [{ name: "flagCtx", ctx: simpleContext, initialValue: false }] }
) {
  constructor() {
    super();

    this.listen("count", (e) => {
      this.ctxGlobals["flagCtx"].setValue(e.detail > 5);
    });
  }
}

import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { LithiumEntry } from "@lithium/lithium.config";
import { simpleContext } from "@core/contexts/simple-global.context";

import "@modules/home/home.module";

@customElement("app-entry")
export class AppEntry extends LithiumEntry(
  [{ path: "/*", render: () => html`<home-module />` }],
  { ctx: simpleContext, initialValue: false }
) {
  constructor() {
    super();

    this.listen("count", (e) => {
      this.ctxGlobal.setValue(e.detail > 10);
    });
  }
}

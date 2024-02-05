import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { LithiumEntry } from "@lithium/lithium.config";

import '@modules/home/home.module';

@customElement("app-entry")
export class AppEntry extends LithiumEntry([
  { path: '/*', render: () => html`<home-module/>` },
]) {}

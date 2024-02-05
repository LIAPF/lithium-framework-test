import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { LithiumElement } from "@lithium/lithium.config";
import { signal } from '@lit-labs/preact-signals';

import "@components/button/button.component";
import style from "./home.style.scss?inline";

@customElement("home-page")
export class HomePage extends LithiumElement(style) {
  private count = signal(0)

  private _onClick() {
    this.count.value = this.count.value + 1;
  }

  render() {
    return html`
      <app-button @click=${this._onClick}></app-button>
      <p>The count is ${this.count.value}</p>
    `;
  }
}

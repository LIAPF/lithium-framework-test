import { html } from "lit";
import { consume } from '@lit/context';
import { signal } from '@lit-labs/preact-signals';
import { customElement } from "lit/decorators.js";
import { LithiumElement } from "@lithium/lithium.config";

import { simpleContext } from "@core/contexts/simple-global.context";
import "@components/button/button.component";
import style from "./home.style.scss?inline";

@customElement("home-page")
export class HomePage extends LithiumElement(style) {
  private count = signal<number>(0);

  @consume({ context: simpleContext, subscribe: true })
  private flag?: boolean;

  private _onClick() {
    this.count.value += 1;
    this.output('count', this.count.value);
  }

  render() {
    return html`
      <app-button @click=${this._onClick}></app-button>
      <p>The count is ${this.count.value}</p>
      <p>${ this.flag && 'The cont > 10' }</p>
    `;
  }
}

import { LithiumElement, component, html } from '@lithium';
import { signal } from '@lit-labs/preact-signals';
import { consume } from '@lit/context';

import { simpleContext } from "@core/contexts/simple-global.context";
import "@components/button/button.component";

@component("home-page")
export class HomePage extends LithiumElement() {
  private count = signal<number>(0);

  @consume({ context: simpleContext, subscribe: true })
  private flag?: boolean;

  private _onClick() {
    this.count.value += 1;
    this.output('count', this.count.value);
  }

  render() {
    return html`
      <app-button
        @click=${ this._onClick }
        text="Click me!"
      ></app-button>
      <p>The count is ${this.count.value}</p>
      <p>${ this.flag && 'The cont > 5' }</p>
    `;
  }
}

import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LithiumElement } from '@lithium/lithium.config';

import style from "./button.style.scss?inline";

@customElement("app-button")
export class AppButton extends LithiumElement(style) {

  @property({ type: String })
  text: string;
  
  render() {
    return html`
      <button class="active:outline-none active:scale-95 border-2 text-red-600 duration-75 font-bold px-9 py-3 transform transition">
        ${ this.text }
      </button>
    `;
  }
}

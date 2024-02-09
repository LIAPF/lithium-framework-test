import { LithiumElement, html, component, property } from "@lithium";
import style from "./button.style.scss?inline";

@component("app-button")
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

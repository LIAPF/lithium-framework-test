import { html } from "lit";
import { Routes } from '@lit-labs/router';
import { customElement, property, state } from "lit/decorators.js";
import { LithiumModule } from "@lithium/lithium.config";
import { simpleGuard } from "@core/guards/simple.guard";
import { simpleContext } from "@core/contexts/simple-global.context";
import { provide } from "@lit/context";

import './pages/home.page';

@customElement("home-module")
export class HomeModule extends LithiumModule {
  private _routes = new Routes(this, [
    { path: '', render: () => html`<home-page />` },
    { path: 'hello', render: () => html`<p>Hello World</p>`, enter: () => simpleGuard(this) }
  ]);

  @provide({ context: simpleContext })
  flag: boolean = false;

  constructor() {
    super();
    
    this.addEventListener('count', (e: CustomEvent) => {
      this.flag = e.detail > 10;
    });
  }

  render() {
    return this._routes.outlet();
  }
}

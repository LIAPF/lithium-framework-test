import { html } from "lit";
import { Routes } from '@lit-labs/router';
import { customElement } from "lit/decorators.js";
import { LithiumModule } from "@lithium/lithium.config";

import './pages/home.page';

@customElement("home-module")
export class HomeModule extends LithiumModule {
  private _routes = new Routes(this, [
    { path: '', render: () => html`<home-page />` }
  ]);

  render() {
    return this._routes.outlet();
  }
}

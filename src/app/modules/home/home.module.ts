import { LithiumModule, component, html } from "@lithium";
import { Routes } from '@lit-labs/router';
import { simpleGuard } from "@core/guards/simple.guard";

import './pages/home.page';

@component("home-module")
export class HomeModule extends LithiumModule {
  private _routes = new Routes(this, [
    { path: '', render: () => html`<home-page />` },
    { path: 'hello', render: () => html`<p>Hello World</p>`, enter: simpleGuard(this) }
  ]);

  render() {
    return this._routes.outlet();
  }
}

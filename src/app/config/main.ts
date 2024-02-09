import {
  LithiumElement as LE,
  LithiumEntry,
  LithiumModule,
  component,
  html,
  property
} from "lithium-core";
import global from "@src/style.global.css?inline";

export {
  property,
  component,
  html,
  LithiumEntry,
  LithiumModule
}

export const LithiumElement = (style?: any) => {
  return class extends LE(global, style) {};
};

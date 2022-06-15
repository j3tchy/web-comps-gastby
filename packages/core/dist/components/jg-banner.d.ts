import type { Components, JSX } from "../types/components";

interface JgBanner extends Components.JgBanner, HTMLElement {}
export const JgBanner: {
  prototype: JgBanner;
  new (): JgBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

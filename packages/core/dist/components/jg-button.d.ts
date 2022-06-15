import type { Components, JSX } from "../types/components";

interface JgButton extends Components.JgButton, HTMLElement {}
export const JgButton: {
  prototype: JgButton;
  new (): JgButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

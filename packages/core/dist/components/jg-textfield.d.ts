import type { Components, JSX } from "../types/components";

interface JgTextfield extends Components.JgTextfield, HTMLElement {}
export const JgTextfield: {
  prototype: JgTextfield;
  new (): JgTextfield;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

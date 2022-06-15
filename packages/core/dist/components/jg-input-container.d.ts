import type { Components, JSX } from "../types/components";

interface JgInputContainer extends Components.JgInputContainer, HTMLElement {}
export const JgInputContainer: {
  prototype: JgInputContainer;
  new (): JgInputContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

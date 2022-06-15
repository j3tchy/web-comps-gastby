import type { Components, JSX } from "../types/components";

interface JgSearchBar extends Components.JgSearchBar, HTMLElement {}
export const JgSearchBar: {
  prototype: JgSearchBar;
  new (): JgSearchBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

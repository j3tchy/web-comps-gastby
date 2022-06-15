import type { Components, JSX } from "../types/components";

interface JgMenu extends Components.JgMenu, HTMLElement {}
export const JgMenu: {
  prototype: JgMenu;
  new (): JgMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

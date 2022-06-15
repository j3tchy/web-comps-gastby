import { Component, h, Host } from "@stencil/core";
export class InputContainer {
  render() {
    return (h(Host, null,
      h("div", { class: "focus-indicator" },
        h("slot", null))));
  }
  static get is() { return "jg-input-container"; }
  static get originalStyleUrls() { return {
    "$": ["jg-input-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jg-input-container.css"]
  }; }
}

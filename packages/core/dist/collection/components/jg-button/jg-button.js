import { Component, h, Host, Prop } from "@stencil/core";
export class Button {
  render() {
    return (h(Host, null,
      h("button", { class: "button" },
        h("slot", null),
        this.label)));
  }
  static get is() { return "jg-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jg-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jg-button.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
}

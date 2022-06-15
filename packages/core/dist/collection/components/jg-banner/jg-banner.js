import { h, Component, Host, Prop } from "@stencil/core";
export class Banner {
  constructor() {
    this.variant = "blue";
  }
  render() {
    return (h(Host, { class: {
        "banner": true,
        [`${this.variant}`]: true
      } },
      h("div", null, this.message)));
  }
  static get is() { return "jg-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jg-banner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jg-banner.css"]
  }; }
  static get properties() { return {
    "message": {
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
      "attribute": "message",
      "reflect": false
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"blue\" | \"red\"",
        "resolved": "\"blue\" | \"red\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "\"blue\""
    }
  }; }
}

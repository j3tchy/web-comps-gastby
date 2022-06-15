import { Component, Element, h, Host, Prop } from "@stencil/core";
import { createPopper } from "@popperjs/core";
export class Menu {
  componentDidRender() {
    createPopper(this.anchor, this.host, {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        },
        {
          name: "flip",
          options: {
            allowedAutoPlacements: ["top", "bottom"],
            rootBoundary: "viewport"
          }
        }
      ]
    });
  }
  render() {
    return (h(Host, null,
      h("ul", { class: "menu-wrapper" },
        h("li", null, "Option 1"),
        h("li", null, "Option 2"),
        h("li", null, "Option 3"),
        h("li", null, "Option 4"),
        h("li", null, "Option 5"))));
  }
  static get is() { return "jg-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jg-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jg-menu.css"]
  }; }
  static get properties() { return {
    "anchor": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HTMLElement",
        "resolved": "HTMLElement",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    }
  }; }
  static get elementRef() { return "host"; }
}

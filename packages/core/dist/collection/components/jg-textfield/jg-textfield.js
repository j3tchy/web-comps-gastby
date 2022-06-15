import { Component, h, Host, Prop, Element } from "@stencil/core";
import { inheritAriaAttributes, INHERITATTRIBUTES } from "../../utils/utils";
export class TextField {
  constructor() {
    this.value = "";
    this.inheritedAttributes = {};
    this.onInput = (e) => {
      this.value = e.target.value;
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el, [...INHERITATTRIBUTES]);
  }
  render() {
    return (h(Host, { class: {
        ["ic-textfield"]: true
      } },
      h("jg-input-container", null,
        h("input", Object.assign({ type: "text", value: this.value, onInput: (e) => this.onInput(e) }, this.inheritedAttributes)),
        h("slot", { name: "search-submit-button" }),
        h("div", { class: "link" }, "Link")),
      h("slot", { name: "menu" }),
      h("slot", { name: "tester-slot" }, "Tester Slot"),
      h("a", { class: "link" }, "Textfield Link"),
      h("p", null,
        "Paragraph",
        h("span", null, "Span"))));
  }
  static get is() { return "jg-textfield"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jg-textfield.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jg-textfield.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "string",
      "mutable": true,
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
      "reflect": true,
      "defaultValue": "\"\""
    }
  }; }
  static get elementRef() { return "el"; }
}

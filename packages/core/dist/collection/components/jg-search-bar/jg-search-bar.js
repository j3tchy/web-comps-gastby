import { Component, h, Host, Prop, Watch } from "@stencil/core";
import searchIcon from "../assets/magnify.svg";
export class SearchBar {
  constructor() {
    this.value = "";
    this.onInput = (e) => {
      this.value = e.target.value;
    };
  }
  // private onInput = (e: Event) => {
  //   console.log(e);
  // }
  watchValue(newValue) {
    if (this.inputEl && this.inputEl.value) {
      this.inputEl.value = newValue;
    }
  }
  componentDidLoad() {
    this.anchor = this.inputEl.shadowRoot.querySelector('jg-input-container');
  }
  render() {
    return (h(Host, { "aria-describedby": "hint" },
      h("jg-textfield", { ref: (el) => this.inputEl = el, onInput: (e) => this.onInput(e), value: this.value, "aria-label": "Hello", "aria-describedby": "hint" },
        h("jg-button", { innerHTML: searchIcon, slot: "search-submit-button", id: "search-submit-button" }),
        h("div", { slot: "tester-slot" }, "Content from Search Bar")),
      this.value && (h("jg-menu", { anchor: this.anchor, slot: "menu", value: this.value })),
      h("div", { id: "hint", style: { "display": "none" } }, "This is a test")));
  }
  static get is() { return "jg-search-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jg-search-bar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jg-search-bar.css"]
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
    },
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
  static get watchers() { return [{
      "propName": "value",
      "methodName": "watchValue"
    }]; }
}

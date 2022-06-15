import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './jg-input-container2.js';

const inheritAriaAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const INHERITATTRIBUTES = [
  "aria-label",
  "aria-describedby"
];

const jgTextfieldCss = "*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role='list'],ol[role='list']{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:host{display:inline-block;border:none}:host input[type=\"text\"]{border:0;line-height:1.5rem;padding:6px;border-radius:6px;box-shadow:none;width:100%}:host input[type=\"text\"]:focus{outline:none}:host ::slotted(jg-button) ::slotted(svg){background-color:var(--button-hover)}:host(.ic-textfield) ::slotted(div){background-color:red}";

const TextField = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
      } }, h("jg-input-container", null, h("input", Object.assign({ type: "text", value: this.value, onInput: (e) => this.onInput(e) }, this.inheritedAttributes)), h("slot", { name: "search-submit-button" }), h("div", { class: "link" }, "Link")), h("slot", { name: "menu" }), h("slot", { name: "tester-slot" }, "Tester Slot"), h("a", { class: "link" }, "Textfield Link"), h("p", null, "Paragraph", h("span", null, "Span"))));
  }
  get el() { return this; }
  static get style() { return jgTextfieldCss; }
}, [1, "jg-textfield", {
    "value": [1537]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["jg-textfield", "jg-input-container"];
  components.forEach(tagName => { switch (tagName) {
    case "jg-textfield":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TextField);
      }
      break;
    case "jg-input-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { TextField as T, defineCustomElement as d };

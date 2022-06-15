import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const jgButtonCss = "*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role='list'],ol[role='list']{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:host{display:inline-block}.button{border:none;background:none;display:inline-flex}.button:hover{cursor:pointer}.button ::slotted(svg){color:var(--button-hover)}";

const Button = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("button", { class: "button" }, h("slot", null), this.label)));
  }
  static get style() { return jgButtonCss; }
}, [1, "jg-button", {
    "label": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["jg-button"];
  components.forEach(tagName => { switch (tagName) {
    case "jg-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
  } });
}

export { Button as B, defineCustomElement as d };

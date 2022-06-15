import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const jgBannerCss = ":host{display:flex;font-family:Arial, Helvetica, sans-serif}:host(.banner){height:30px;position:fixed;bottom:0;left:0;right:0;text-align:center;text-transform:uppercase;font-weight:600;align-items:center;justify-content:center}:host(.blue){background-color:#1DA1F2;color:#FFF}";

const Banner = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.variant = "blue";
  }
  render() {
    return (h(Host, { class: {
        "banner": true,
        [`${this.variant}`]: true
      } }, h("div", null, this.message)));
  }
  static get style() { return jgBannerCss; }
}, [1, "jg-banner", {
    "message": [1],
    "variant": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["jg-banner"];
  components.forEach(tagName => { switch (tagName) {
    case "jg-banner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Banner);
      }
      break;
  } });
}

const JgBanner = Banner;
const defineCustomElement = defineCustomElement$1;

export { JgBanner, defineCustomElement };

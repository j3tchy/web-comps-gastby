import { r as registerInstance, h, H as Host } from './index-4b8f205b.js';

const jgBannerCss = ":host{display:flex;font-family:Arial, Helvetica, sans-serif}:host(.banner){height:30px;position:fixed;bottom:0;left:0;right:0;text-align:center;text-transform:uppercase;font-weight:600;align-items:center;justify-content:center}:host(.blue){background-color:#1DA1F2;color:#FFF}";

const Banner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "blue";
  }
  render() {
    return (h(Host, { class: {
        "banner": true,
        [`${this.variant}`]: true
      } }, h("div", null, this.message)));
  }
};
Banner.style = jgBannerCss;

export { Banner as jg_banner };

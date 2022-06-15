'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e8065e32.js');

const jgBannerCss = ":host{display:flex;font-family:Arial, Helvetica, sans-serif}:host(.banner){height:30px;position:fixed;bottom:0;left:0;right:0;text-align:center;text-transform:uppercase;font-weight:600;align-items:center;justify-content:center}:host(.blue){background-color:#1DA1F2;color:#FFF}";

const Banner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = "blue";
  }
  render() {
    return (index.h(index.Host, { class: {
        "banner": true,
        [`${this.variant}`]: true
      } }, index.h("div", null, this.message)));
  }
};
Banner.style = jgBannerCss;

exports.jg_banner = Banner;

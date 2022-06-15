'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e8065e32.js');

const jgInputContainerCss = "*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role='list'],ol[role='list']{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}jg-input-container{display:flex;border-radius:6px;border:1px solid var(--border-color, #999);align-items:center;width:320px;position:relative;box-sizing:border-box;height:40px}jg-input-container:hover{--border-color:red;--button-hover:blue}.focus-indicator{display:flex;width:100%;margin:-3px;padding:3px;border-radius:3px}.focus-indicator:focus-within{box-shadow:0 3px 3px red}";

const InputContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "focus-indicator" }, index.h("slot", null))));
  }
};
InputContainer.style = jgInputContainerCss;

exports.jg_input_container = InputContainer;

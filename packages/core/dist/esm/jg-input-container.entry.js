import { r as registerInstance, h, H as Host } from './index-4b8f205b.js';

const jgInputContainerCss = "*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role='list'],ol[role='list']{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}jg-input-container{display:flex;border-radius:6px;border:1px solid var(--border-color, #999);align-items:center;width:320px;position:relative;box-sizing:border-box;height:40px}jg-input-container:hover{--border-color:red;--button-hover:blue}.focus-indicator{display:flex;width:100%;margin:-3px;padding:3px;border-radius:3px}.focus-indicator:focus-within{box-shadow:0 3px 3px red}";

const InputContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "focus-indicator" }, h("slot", null))));
  }
};
InputContainer.style = jgInputContainerCss;

export { InputContainer as jg_input_container };

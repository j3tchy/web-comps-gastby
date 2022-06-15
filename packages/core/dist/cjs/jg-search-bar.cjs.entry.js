'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e8065e32.js');

const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" fill="currentColor" /></svg>
`;

const jgSearchBarCss = "*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role='list'],ol[role='list']{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:host{display:block}";

const SearchBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { "aria-describedby": "hint" }, index.h("jg-textfield", { ref: (el) => this.inputEl = el, onInput: (e) => this.onInput(e), value: this.value, "aria-label": "Hello", "aria-describedby": "hint" }, index.h("jg-button", { innerHTML: searchIcon, slot: "search-submit-button", id: "search-submit-button" }), index.h("div", { slot: "tester-slot" }, "Content from Search Bar")), this.value && (index.h("jg-menu", { anchor: this.anchor, slot: "menu", value: this.value })), index.h("div", { id: "hint", style: { "display": "none" } }, "This is a test")));
  }
  static get watchers() { return {
    "value": ["watchValue"]
  }; }
};
SearchBar.style = jgSearchBarCss;

exports.jg_search_bar = SearchBar;

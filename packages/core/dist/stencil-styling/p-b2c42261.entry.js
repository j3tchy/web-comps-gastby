import{r as t,h as i,H as e}from"./p-caa806eb.js";const o=class{constructor(i){t(this,i),this.value="",this.onInput=t=>{this.value=t.target.value}}watchValue(t){this.inputEl&&this.inputEl.value&&(this.inputEl.value=t)}componentDidLoad(){this.anchor=this.inputEl.shadowRoot.querySelector("jg-input-container")}render(){return i(e,{"aria-describedby":"hint"},i("jg-textfield",{ref:t=>this.inputEl=t,onInput:t=>this.onInput(t),value:this.value,"aria-label":"Hello","aria-describedby":"hint"},i("jg-button",{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" fill="currentColor" /></svg>\n',slot:"search-submit-button",id:"search-submit-button"}),i("div",{slot:"tester-slot"},"Content from Search Bar")),this.value&&i("jg-menu",{anchor:this.anchor,slot:"menu",value:this.value}),i("div",{id:"hint",style:{display:"none"}},"This is a test"))}static get watchers(){return{value:["watchValue"]}}};o.style="*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role='list'],ol[role='list']{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}:host{display:block}";export{o as jg_search_bar}
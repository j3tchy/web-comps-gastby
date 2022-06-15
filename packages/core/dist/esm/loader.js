import { p as promiseResolve, b as bootstrapLazy } from './index-4b8f205b.js';

/*
 Stencil Client Patch Esm v2.16.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["jg-input-container",[[4,"jg-input-container"]]],["jg-button_3",[[1,"jg-textfield",{"value":[1537]}],[1,"jg-button",{"label":[1]}],[1,"jg-menu",{"anchor":[16],"value":[1]}]]],["jg-search-bar",[[1,"jg-search-bar",{"label":[1],"value":[1537]}]]],["jg-banner",[[1,"jg-banner",{"message":[1],"variant":[1]}]]]], options);
  });
};

export { defineCustomElements };

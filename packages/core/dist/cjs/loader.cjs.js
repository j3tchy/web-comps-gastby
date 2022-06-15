'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e8065e32.js');

/*
 Stencil Client Patch Esm v2.16.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["jg-input-container.cjs",[[4,"jg-input-container"]]],["jg-button_3.cjs",[[1,"jg-textfield",{"value":[1537]}],[1,"jg-button",{"label":[1]}],[1,"jg-menu",{"anchor":[16],"value":[1]}]]],["jg-search-bar.cjs",[[1,"jg-search-bar",{"label":[1],"value":[1537]}]]],["jg-banner.cjs",[[1,"jg-banner",{"message":[1],"variant":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;

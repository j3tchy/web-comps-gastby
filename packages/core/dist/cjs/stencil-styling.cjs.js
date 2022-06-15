'use strict';

const index = require('./index-e8065e32.js');

/*
 Stencil Client Patch Browser v2.16.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-styling.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["jg-input-container.cjs",[[4,"jg-input-container"]]],["jg-button_3.cjs",[[1,"jg-textfield",{"value":[1537]}],[1,"jg-button",{"label":[1]}],[1,"jg-menu",{"anchor":[16],"value":[1]}]]],["jg-search-bar.cjs",[[1,"jg-search-bar",{"label":[1],"value":[1537]}]]],["jg-banner.cjs",[[1,"jg-banner",{"message":[1],"variant":[1]}]]]], options);
});

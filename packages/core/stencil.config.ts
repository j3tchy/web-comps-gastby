import { Config } from '@stencil/core';
import { inlineSvg } from 'stencil-inline-svg';
import { reactOutputTarget as react } from "@stencil/react-output-target";

export const config: Config = {
  namespace: 'stencil-styling',
  outputTargets: [
    react({
      componentCorePackage: '@jg/core',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: "dist-hydrate-script"
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    inlineSvg()
  ]
};

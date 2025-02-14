import { GitContentSource } from "@stackbit/cms-git";

import { Page } from "./.stackbit/models/Page";
import { SiteConfig } from "./.stackbit/models/SiteConfig";
import { HeroBlock } from "./.stackbit/models/blocks/Hero";
import { Button } from "./.stackbit/models/components/Button";

export default sbConfig = {
  // Config
  stackbitVersion: "~0.6.0",
  ssgName: "eleventy",
  nodeVersion: "18",

  // Eleventy to run inside Visual Editor container
  devCommand: "npx @11ty/eleventy --serve --port {PORT}",

  // Eleventy-specific configuration
  experimental: {
    ssg: {
      proxyWebsockets: true,
      logPatterns: {
        up: ["Server at"],
      },
    },
  },

  // Specific option to prevent Visual Editor from interfering with Eleventy's page reload mechanism
  customContentReload: true,

  // Setup our git content source
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src"],
      useFileIds: true,
      models: [Page, SiteConfig, HeroBlock, Button],
      assetsConfig: {
        referenceType: "static",
        staticDir: "src/uploads",
        uploadDir: "images",
        publicPath: "/",
      },
    }),
  ],
};

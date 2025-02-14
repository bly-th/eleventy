import { GitContentSource } from "@stackbit/cms-git";

import { Page } from "./.stackbit/models/Page";
import { SiteConfig } from "./.stackbit/models/SiteConfig";
import { HeroBlock } from "./.stackbit/models/blocks/Hero";
import { Button } from "./.stackbit/models/components/Button";

export default sbConfig = {
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "16",
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

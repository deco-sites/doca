import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 563,
  site: "doca",
  domains: ["doca.deco.site"],
});
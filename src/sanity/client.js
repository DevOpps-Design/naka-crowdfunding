import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

export const sanityEnabled = Boolean(projectId);

export const client = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2026-07-01",
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source) {
  if (!builder || !source) return null;
  return builder.image(source);
}

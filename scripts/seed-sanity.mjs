import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_TOKEN;

if (!projectId || !token) {
  console.error("Erreur : SANITY_PROJECT_ID et SANITY_TOKEN sont requis.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-07-01",
  token,
  useCdn: false,
});

const { blogPosts } = await import(pathToFileURL(resolve(root, "src/data/blog-posts.js")).href);

function key() {
  return Math.random().toString(36).slice(2, 10);
}

function toPortableText(content) {
  return content.map((block) => ({
    _key: `block-${key()}`,
    _type: "block",
    style: block.type === "heading" ? "h2" : "normal",
    children: [{ _key: `span-${key()}`, _type: "span", text: block.text }],
    markDefs: [],
  }));
}

async function uploadImage(publicPath) {
  const filePath = resolve(root, "public", publicPath.replace(/^\/+/, ""));
  try {
    const asset = await client.assets.upload(
      "image",
      readFileSync(filePath),
      { filename: publicPath.split("/").pop() }
    );
    return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  } catch (err) {
    console.warn(`  ! Impossible d'uploader ${publicPath} :`, err.message);
    return undefined;
  }
}

for (const post of blogPosts) {
  console.log(`→ Import de "${post.fr.title}" (${post.slug})`);
  const coverImage = await uploadImage(post.image);
  const doc = {
    _id: `post-${post.slug}`,
    _type: "post",
    titleFR: post.fr.title,
    titleEN: post.en.title,
    slug: { _type: "slug", current: post.slug },
    category: "article",
    publishedAt: post.date,
    author: "Équipe NAKA",
    ...(coverImage ? { coverImage } : {}),
    excerptFR: post.fr.excerpt,
    excerptEN: post.en.excerpt,
    bodyFR: toPortableText(post.fr.content),
    bodyEN: toPortableText(post.en.content),
  };
  await client.createOrReplace(doc);
  console.log("  ✓ Publié");
}

console.log("\nTerminé. Contenu visible sur https://gz3gixgh.sanity.studio");

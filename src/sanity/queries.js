import { client, sanityEnabled } from "./client";

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  titleFR,
  titleEN,
  slug,
  category,
  publishedAt,
  author,
  location,
  excerptFR,
  excerptEN,
  coverImage
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  titleFR,
  titleEN,
  slug,
  category,
  publishedAt,
  author,
  location,
  excerptFR,
  excerptEN,
  bodyFR,
  bodyEN,
  coverImage
}`;

export async function fetchPosts() {
  if (!sanityEnabled) return null;
  return client.fetch(POSTS_QUERY);
}

export async function fetchPostBySlug(slug) {
  if (!sanityEnabled) return null;
  return client.fetch(POST_BY_SLUG_QUERY, { slug });
}

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { blogPosts } from "../data/blog-posts";
import { sanityEnabled, urlFor } from "../sanity/client";
import { fetchPosts } from "../sanity/queries";

const staticPosts = blogPosts;

export default function Blog() {
  const { t, i18n } = useTranslation();
  const labels = t("blog.posts", { returnObjects: true });
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [posts, setPosts] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!sanityEnabled) return;
    let mounted = true;
    fetchPosts()
      .then((data) => {
        if (mounted) setPosts(data);
      })
      .catch(() => {
        if (mounted) setFailed(true);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const loading = sanityEnabled && posts === null && !failed;
  const useSanity = sanityEnabled && !failed && posts !== null;

  return (
    <>
      <section className="relative overflow-hidden bg-naka-darkBlue px-5 pt-24 pb-4 md:px-8 md:pt-32">
        <img
          src="/assets/banniere-blog.png"
          alt={t("blog.title")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-naka-darkBlue/75 via-naka-darkBlue/55 to-naka-darkBlue/90" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("blog.title")}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            {t("blog.desc")}
          </p>
        </div>
      </section>

      <section className="bg-white px-5 pt-16 pb-24 md:px-8 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {loading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="animate-pulse overflow-hidden rounded-2xl border border-gray-100 bg-white">
                  <div className="aspect-[16/10] bg-gray-100" />
                  <div className="space-y-3 p-6">
                    <div className="h-3 w-24 rounded bg-gray-100" />
                    <div className="h-5 w-3/4 rounded bg-gray-100" />
                    <div className="h-3 w-full rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(useSanity ? posts : staticPosts).map((post, i) => {
                const isSanity = useSanity;
                const slug = isSanity ? post.slug?.current : post.slug;
                const image = isSanity ? urlFor(post.coverImage)?.width(800).url() : post.image;
                const title = isSanity
                  ? lang === "fr" ? post.titleFR : post.titleEN
                  : labels?.[i]?.title || post.slug;
                const excerpt = isSanity
                  ? lang === "fr" ? post.excerptFR : post.excerptEN
                  : labels?.[i]?.excerpt || "";
                const date = isSanity ? post.publishedAt : post.date;
                const category = isSanity ? post.category : null;

                return (
                  <article key={slug} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200 hover:shadow-sm">
                    <Link to={`/blog/${slug}`} className="relative block aspect-[16/10] overflow-hidden bg-gray-100">
                      {image ? (
                        <img
                          src={image}
                          alt={title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-naka-green/15 to-naka-cyan/15 text-sm font-medium text-naka-darkBlue/40">
                          NAKA
                        </div>
                      )}
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        {category && category !== "article" && (
                          <span className="rounded-full bg-naka-green/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-naka-green">
                            {t(`blog.category_${category}`)}
                          </span>
                        )}
                        <time className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                          {date}
                        </time>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-naka-darkBlue">
                        {title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                        {excerpt}
                      </p>
                      <Link
                        to={`/blog/${slug}`}
                        className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-naka-darkBlue transition-colors duration-300 hover:text-naka-cyan"
                      >
                        {t("blog.read_all")}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                          <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <ScrollReveal>
        <section className="bg-naka-darkBlue px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {t("blog.cta_title")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {t("blog.cta_desc")}
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-naka-cyan px-7 py-3 text-sm font-semibold text-naka-darkBlue transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
              >
                {t("blog.cta_link")}
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}

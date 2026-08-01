import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams, Navigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import ScrollReveal from "./ScrollReveal";
import { getPostBySlug, blogPosts } from "../data/blog-posts";
import { sanityEnabled, urlFor } from "../sanity/client";
import { fetchPostBySlug } from "../sanity/queries";

export default function BlogArticle() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const staticPost = getPostBySlug(slug);
  const [result, setResult] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  useEffect(() => {
    if (!sanityEnabled || !slug) return;
    let mounted = true;
    fetchPostBySlug(slug)
      .then((data) => {
        if (!mounted) return;
        setResult(data ? { slug, post: data } : { slug, error: true });
      })
      .catch(() => {
        if (mounted) setResult({ slug, error: true });
      });
    return () => {
      mounted = false;
    };
  }, [slug]);

  const current = result && result.slug === slug ? result : null;
  const loading = sanityEnabled && !current;
  const isSanity = sanityEnabled && !!current?.post;

  if (loading) {
    return (
      <section className="bg-white px-5 pt-24 pb-24 md:px-8 md:pt-32">
        <div className="mx-auto max-w-3xl animate-pulse space-y-4">
          <div className="h-4 w-24 rounded bg-gray-100" />
          <div className="h-8 w-3/4 rounded bg-gray-100" />
          <div className="aspect-[16/9] rounded-2xl bg-gray-100" />
          <div className="space-y-3 pt-4">
            <div className="h-3 w-full rounded bg-gray-100" />
            <div className="h-3 w-full rounded bg-gray-100" />
            <div className="h-3 w-2/3 rounded bg-gray-100" />
          </div>
        </div>
      </section>
    );
  }

  const finalPost = isSanity ? current.post : staticPost;

  if (!finalPost) return <Navigate to="/blog" replace />;

  const title = isSanity ? (lang === "fr" ? finalPost.titleFR : finalPost.titleEN) : finalPost[lang].title;
  const date = isSanity ? finalPost.publishedAt : finalPost.date;
  const image = isSanity ? urlFor(finalPost.coverImage)?.width(1200).url() : finalPost.image;
  const content = isSanity ? finalPost[`body${lang === "fr" ? "FR" : "EN"}`] : finalPost[lang].content;
  const category = isSanity ? finalPost.category : null;
  const author = isSanity ? finalPost.author : null;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex >= 0
    ? blogPosts[currentIndex - 1] || blogPosts[currentIndex + 1] || null
    : null;

  const components = {
    block: {
      normal: ({ children }) => <p className="mb-5 text-base leading-[1.8] text-gray-600">{children}</p>,
      h2: ({ children }) => <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-naka-darkBlue md:text-2xl">{children}</h2>,
      h3: ({ children }) => <h3 className="mt-8 mb-3 text-lg font-semibold tracking-tight text-naka-darkBlue">{children}</h3>,
    },
  };

  const visibleContent = isSanity ? content : content.slice(0, showAll ? content.length : 3);

  return (
    <>
      <section className="bg-white px-5 pt-24 pb-4 md:px-8 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-naka-darkBlue"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            {t("blog.back")}
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {category && category !== "article" && (
              <span className="rounded-full bg-naka-green/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-naka-green">
                {t(`blog.category_${category}`)}
              </span>
            )}
            <p className="text-sm font-medium text-naka-cyan">
              {t("blog.published")} : {date}
            </p>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-naka-darkBlue sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {author && (
            <p className="mt-4 text-sm text-gray-400">
              {t("blog.by")} {author}
            </p>
          )}
        </div>
      </section>

      <section className="bg-white px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-3xl">
          {image ? (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={image}
                alt={title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[16/9] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-naka-green/15 to-naka-cyan/15 text-sm font-medium text-naka-darkBlue/40">
              NAKA
            </div>
          )}
          <article className="mt-10">
            {isSanity ? (
              <PortableText value={content} components={components} />
            ) : (
              <>
                {visibleContent.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={i} className="mt-12 mb-4 text-xl font-semibold tracking-tight text-naka-darkBlue md:text-2xl">
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="mb-5 text-base leading-[1.8] text-gray-600">
                      {block.text}
                    </p>
                  );
                })}
              </>
            )}
            {!isSanity && !showAll && content.length > 3 && (
              <button
                onClick={() => setShowAll(true)}
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-naka-darkBlue transition-all duration-300 hover:border-naka-cyan hover:text-naka-cyan active:scale-[0.97]"
              >
                {t("blog.read_all")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-y-0.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            )}
          </article>

          {nextPost && (
            <div className="mt-16 border-t border-gray-100 pt-10">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                {t("blog.read_other")}
              </p>
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all duration-300 hover:border-gray-200 hover:shadow-sm"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-naka-darkBlue transition-colors duration-300 group-hover:text-naka-cyan truncate">
                    {nextPost[lang].title}
                  </p>
                  <p className="mt-0.5 text-sm text-gray-400 line-clamp-1">
                    {nextPost[lang].excerpt}
                  </p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="ml-4 shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-naka-cyan">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
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

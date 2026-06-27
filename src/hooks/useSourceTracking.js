import { useEffect } from "react";
import i18n from "../i18n";

const SITE_URL = "https://crowdfunding.naka-africa.com";

export function useSourceTracking() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    if (source) {
      sessionStorage.setItem("naka_source", source);
    }
  }, []);
}

export function getSource() {
  return sessionStorage.getItem("naka_source") || "";
}

export function withSource(url) {
  const source = getSource();
  if (!source) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}source=${source}`;
}

export function shareUrl(platform) {
  const url = SITE_URL;
  const text = i18n.t("share.default_text");
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  switch (platform) {
    case "whatsapp":
      return `https://wa.me/?text=${encodedText}%20${encodedUrl}?source=whatsapp`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}%3Fsource%3Dlinkedin`;
    case "twitter":
      return `https://x.com/intent/tweet?text=${encodedText}&url=${encodedUrl}?source=twitter`;
    default:
      return url;
  }
}

import { useEffect } from "react";

const STORAGE_KEY = "naka_source";

export function useTracking() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    if (source) {
      localStorage.setItem(STORAGE_KEY, source);
    }
  }, []);

  const getSource = () => localStorage.getItem(STORAGE_KEY) || "";
  const getPayUrl = (base, tier) => {
    const url = new URL(base);
    const source = getSource();
    if (source) url.searchParams.set("source", source);
    url.searchParams.set("tier", tier);
    return url.toString();
  };

  return { getSource, getPayUrl };
}

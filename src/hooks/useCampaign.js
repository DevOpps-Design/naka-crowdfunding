import { useState, useEffect, useCallback } from "react";

const ENDPOINT = "https://europe-west1-naka-ec3bf.cloudfunctions.net/getCrowdfundingTotal";
const GOAL = 3_000_000;
// Intervalle de rafraîchissement en ms (10 secondes)
const POLL_INTERVAL = 30_000;

export function useCampaign() {
  const [campaign, setCampaign] = useState({
    totalAmount: 0,
    totalContributors: 0,
  });

  const fetchCampaign = useCallback(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCampaign({
            totalAmount: data.totalAmount || 0,
            totalContributors: data.totalContributors || 0,
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    // Chargement initial
    fetchCampaign();

    // Polling régulier toutes les 10 secondes
    const interval = setInterval(fetchCampaign, POLL_INTERVAL);

    // Refetch instantané quand l'utilisateur revient sur l'onglet
    // (ex : après avoir validé un paiement Kkiapay dans un autre onglet)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchCampaign();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [fetchCampaign]);

  const progress = Math.min((campaign.totalAmount / GOAL) * 100, 100);

  return { campaign, progress, goal: GOAL };
}

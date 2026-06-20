import { useState, useEffect } from "react";

const ENDPOINT = "https://europe-west1-naka-ec3bf.cloudfunctions.net/getCrowdfundingTotal";
const GOAL = 3_000_000;

export function useCampaign() {
  const [campaign, setCampaign] = useState({
    totalAmount: 0,
    totalContributors: 0,
  });

  const fetchCampaign = () => {
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
  };

  useEffect(() => {
    fetchCampaign();
    const interval = setInterval(fetchCampaign, 30000);
    return () => clearInterval(interval);
  }, []);

  const progress = Math.min((campaign.totalAmount / GOAL) * 100, 100);

  return { campaign, progress, goal: GOAL };
}

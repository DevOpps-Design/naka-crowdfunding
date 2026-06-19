import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

const CAMPAIGN_DOC = "campaigns/naka-main";
const GOAL = 3_000_000;

export function useCampaign() {
  const [campaign, setCampaign] = useState({
    totalAmount: 0,
    totalContributors: 0,
    co2SavedKg: 0,
  });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, CAMPAIGN_DOC), (snap) => {
      if (snap.exists()) {
        setCampaign(snap.data());
      }
    });
    return () => unsub();
  }, []);

  const progress = Math.min((campaign.totalAmount / GOAL) * 100, 100);

  return { campaign, progress, goal: GOAL };
}

export type Source = {
  id: number;
  text: string;
  label: string;
  href: string;
};

export const pageSources: Record<string, Source[]> = {
  "/about": [
  {
    id: 1,
    text: "BBPA figures via The Morning Advertiser, May 2026: 161 pubs closed in Q1 2026, 2,400 jobs lost, 26% more closures than Q1 2025. BBPA CEO Emma McClarkin blamed “a disproportionate tax burden and huge costs”, not a lack of trade.",
    label: "Two pubs a day closed in Q1 2026 as 161 sites shut",
    href: "https://www.morningadvertiser.co.uk/Article/2026/05/05/two-pubs-a-day-closed-in-q1-2026-as-161-sites-shut-bbpa/",
  },
  {
    id: 2,
    text: "SIBA, January 2026: 137 net brewery closures in 2025, about 2.6 a week.",
    label: "SIBA warns of 2026 ‘survival crisis’ for British beer",
    href: "https://siba.co.uk/2026/01/27/siba-warns-of-2026-survival-crisis-for-british-beer-as-brewery-closures-average-3-per-week-across-uk/",
  },
  {
    id: 3,
    text: "SIBA, August 2026: independent brewers on average can't access 62% of pubs in their local market.",
    label: "UK brewery closure rate slows but struggles not over yet",
    href: "https://siba.co.uk/2026/08/11/uk-brewery-closure-rate-slows-but-industry-struggles-not-over-yet-say-leading-independent-brewing-trade-body/",
  },
],
};

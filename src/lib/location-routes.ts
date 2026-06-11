export function locationExplorePath(slug: string): string {
  return `/explore/locations/${slug}`;
}

/** Maps hero card display names to explore location slugs. */
export const locationNameToSlug: Record<string, string> = {
  Manali: "manali",
  Kullu: "kullu",
  Kasol: "kasol",
  "Leh Ladakh": "leh-ladakh",
  Bhuntar: "bhuntar",
};

export function resolveLocationSlug(nameOrSlug: string): string {
  return locationNameToSlug[nameOrSlug] ?? nameOrSlug;
}

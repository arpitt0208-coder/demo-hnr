export const improvementSummaryTitle =
  "What to Fix to Raise the Rating — Hire N Ride Landing Page";

export const improvementSummaryText = `SUMMARY: WHAT TO FIX TO RAISE THE RATING
Prioritized by impact — start at the top.

Overall current rating: 7.5 / 10

────────────────────────────────────────
1. CONVERSION & UX (biggest rating jump)
────────────────────────────────────────

Problem: The page looks good but doesn't clearly guide users to book.

Fix:
• One primary CTA everywhere: "Book a Ride" (or "Check Availability") — same label, same action in hero, navbar, and mid-page sections.
• Shorten the scroll: merge or cut 1–2 sections (e.g. Social Proof + Features, or Help Info into Footer).
• Add a sticky mobile CTA bar after the hero.
• Replace all href="#" links with real pages (/fleet, /locations, /terms, /privacy).
• Add a simple booking path: location → dates → bike category (even if mock for now).

Impact: Demo → product feel. Likely +1 to +1.5 on overall score.

────────────────────────────────────────
2. VISUAL POLISH & BRAND IDENTITY
────────────────────────────────────────

Problem: Strong layout, but some sections feel like shared UI-kit patterns.

Fix:
• Lock typography: Inter for body, one accent (Caveat or Neurial) — not both in headings.
• Use more real ride photography; fewer generic illustrations where photos work better.
• Tighten spacing: consistent section padding (py-16 / py-20) and max-width (1280px everywhere).
• Add 2–3 signature brand moments: custom icon style, route-line motif, or a distinctive hero treatment.
• Soften motion: fewer scroll animations; reserve motion for hero, map, and one testimonial block.

Impact: More memorable and premium. +0.5 to +1.

────────────────────────────────────────
3. PERFORMANCE (feels faster = feels better)
────────────────────────────────────────

Problem: Heavy client JS (map, carousels, Framer Motion on many sections).

Fix:
• Lazy-load below-the-fold: map, carousels, testimonials (dynamic() + loading skeleton).
• Convert static sections to Server Components where possible; keep "use client" only where needed.
• Fix AVIF warning: convert adventure.avif to WebP/PNG or use Next image formats Turbopack supports.
• Reduce autoplay carousels; pause when off-screen.
• Add prefers-reduced-motion fallbacks for animations.

Impact: Smoother on mobile. +0.5.

────────────────────────────────────────
4. PRODUCTION READINESS
────────────────────────────────────────

Problem: Still reads as a demo.

Fix:
• SEO: unique title, description, Open Graph image, structured data (LocalBusiness / Service).
• Real contact info, app store links, and social URLs (verify they work).
• 404 page and basic inner pages (Fleet, About, Policies) — even lightweight.
• Add trust signals near CTAs: "4.9★", "10k+ rides", "Insured", "24/7 support" (reuse Trust Bar content).

Impact: Trust and discoverability. +0.5 to +1.

────────────────────────────────────────
5. ACCESSIBILITY & QUALITY
────────────────────────────────────────

Problem: Good basics, not production-grade a11y.

Fix:
• Skip-to-content link.
• Visible focus states on all interactive elements.
• Keyboard support for nav dropdowns and carousels.
• Meaningful alt text on all images (some decorative alt="" is fine).
• Color contrast check on yellow-on-white text.

Impact: Professional polish. +0.3 to +0.5.

────────────────────────────────────────
QUICK WINS (do this week)
────────────────────────────────────────

Priority | Task                                      | Effort
High     | Unified "Book a Ride" CTA + sticky mobile | Low
High     | Replace # placeholder links               | Low
High     | Lazy-load map + heavy carousels           | Medium
Medium   | Cut/merge 1 section, tighten page length  | Low
Medium   | SEO meta + OG tags                        | Low
Medium   | Fix AVIF image warning                    | Low
Nice     | Real inner pages (Fleet, Terms, Privacy)  | Medium
Nice     | prefers-reduced-motion + focus styles     | Medium

────────────────────────────────────────
TARGET SCORES AFTER FIXES
────────────────────────────────────────

Current                              → 7.5 / 10
After conversion + links + performance → 8.5 / 10
After brand polish + SEO + real pages  → 9   / 10

────────────────────────────────────────
ONE-LINE TAKEAWAY
────────────────────────────────────────

Make it shorter, faster, and action-oriented — one clear booking path, real links, less animation, and stronger brand moments will move it from "impressive demo" to "site I'd actually use."`;

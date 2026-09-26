# SEO Implementation Notes

Implemented from the client-approved "BizzOne Digital: On-Page SEO Fix Guide (Solutions)".

## Single sources of truth
| What | File |
|---|---|
| Business info (NAP, hours, socials, site URL) | `src/data/site.ts` |
| Public numbers and claims | `src/data/site-stats.ts` |
| Portfolio images and alt text | `src/data/portfolio.ts` |
| Services and service SEO copy | `src/lib/services.ts` |
| Blog posts | `src/data/blog.ts` |
| Case studies | `src/data/case-studies.ts` |
| Metadata helper | `src/lib/seo.ts` (`buildMetadata`) |
| JSON-LD builders | `src/lib/schema.ts` |

## Needs owner confirmation before launch
1. **Address**: now `55 Village Centre Pl, Mississauga, ON L4Z 1V9` (was "PI" / "L4Z IV9"). Confirm it matches the Google Business Profile exactly, including any suite or unit number. Change it in `src/data/site.ts`.
2. **Numbers** in `src/data/site-stats.ts`: all are marked `verified: false`. Where pages disagreed, the lowest figure already on the site is shown.
3. **Web Development hero copy** ("Over 120 businesses…", free hosting deadline "August 31, 2026") comes from the admin panel or MongoDB. The hosting deadline has passed. Update it in the admin panel.
4. **Service badges** (+300% ROI, 5M+ views, +320% followers, 80% time saved, 300+ brands) in `src/lib/services.ts` are unverified.

## Adding content
- **Blog post**: add an entry to `BLOG_POSTS` (`status: "published"`). It then shows on `/blog` and in the sitemap.
- **Case study**: add an entry to `CASE_STUDIES`. Only add real, client-approved `results`. It is then linked from `/our-work` and from the related service pages.
- **Portfolio image**: export a WebP with a descriptive hyphenated filename into `public/portfolio/<folder>/`, then add `src`, `alt`, `width` and `height` in `src/data/portfolio.ts`.

## Do not add yet
- `AggregateRating` schema. Wait until the review count is verified and the reviews are visible on the same page.

## Audit
Run `npm run build && npm start`, then `python3 scripts/seo_audit.py http://localhost:3000`. It checks titles, descriptions, canonicals, OG and Twitter tags, H1s, alt text, JSON-LD, duplicates and internal links for every URL in the sitemap.

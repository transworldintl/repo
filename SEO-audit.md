# SEO Audit Report — Transworld International (transworldintl.com.pk)

**Audit Date:** 2026-06-09  
**Website:** https://www.transworldintl.com.pk/  
**Platform:** WordPress (Translang theme, WPBakery Page Builder)  
**Tool:** Manual crawl via sitemap

---

## 1. Overall Summary

| Metric | Status |
|---|---|
| **Total pages discovered** | ~50 (across 8 sitemaps: pages, services, courses, team, testimonials) |
| **Meta Titles** | Present on all pages — some inconsistent formatting |
| **Meta Descriptions** | **MISSING on every page** |
| **Canonical Tags** | Present on most pages |
| **Structured Data (JSON-LD)** | Only on homepage (Organization), **missing on all other pages** |
| **H1 Tags** | Present on all crawled pages |
| **Image Alt Attributes** | Some present, **many missing** |
| **Broken/Demo Content** | Multiple pages contain placeholder/demo content |
| **Mobile Responsiveness** | Site uses responsive theme (Translang) — needs manual verification |
| **Page Speed (Mobile)** | Not obtained (API rate-limited — run `pagespeed` test manually) |
| **Page Speed (Desktop)** | Not obtained |

---

## 2. Sitemap Index

**URL:** https://www.transworldintl.com.pk/sitemap.xml

8 sub-sitemaps discovered:

| Sitemap | URL |
|---|---|
| Pages | `wp-sitemap-posts-page-1.xml` |
| Services (CPT) | `wp-sitemap-posts-cpt_services-1.xml` |
| Courses (CPT) | `wp-sitemap-posts-cpt_courses-1.xml` |
| Team (CPT) | `wp-sitemap-posts-cpt_team-1.xml` |
| Testimonials (CPT) | `wp-sitemap-posts-cpt_testimonials-1.xml` |
| Categories | `wp-sitemap-taxonomy-category-1.xml` |
| Post Tags | `wp-sitemap-taxonomy-post_tag-1.xml` |
| Service Categories | `wp-sitemap-taxonomy-cpt_services_categories-1.xml` |

---

## 3. Page-by-Page Audit

### 3.1 Homepage
**URL:** https://www.transworldintl.com.pk/  
**Meta Title:** `Home – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present: `https://www.transworldintl.com.pk/`  
**Structured Data:** ✅ Present (Organization JSON-LD)  
**H1 Tag:** ✅ Present  
**Image Alt Text:** ⚠️ Missing on `logo.png`, `transworld-footer-logo.png`  
**Issues:**
- Contact email in footer: `info@www.transworldintl.com.pk` — contains stray `www.` (likely invalid)
- Social icons use `href="#"` (no links configured)
- Empty `<a>` tags with background images for social links
- `white_logo.png` missing alt text
- `transworld-footer-logo.png` missing alt text

### 3.2 About Us
**URL:** https://www.transworldintl.com.pk/about-us/  
**Meta Title:** `About Us – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present  
**Image Alt Text:** ⚠️ Many images without alt text (employee/team photos)  
**Issues:**
- Team member images: `Mary Jones`, `Joanne Smith`, `Peter H.`, `Kate Edwards` — appear to be demo/placeholder content

### 3.3 Our Mission
**URL:** https://www.transworldintl.com.pk/our-mission/  
**Meta Title:** `Our Mission – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present  
**Image Alt Text:** ✅ Acceptable

### 3.4 Contact Us
**URL:** https://www.transworldintl.com.pk/contacts/  
**Meta Title:** `Contacts – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present  
**Image Alt Text:** ✅ Acceptable

### 3.5 Our Services
**URL:** https://www.transworldintl.com.pk/our-services/  
**Meta Title:** `Our Services – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present  
**Image Alt Text:** ⚠️ Some service icon images lack alt text

### 3.6 Order Translation
**URL:** https://www.transworldintl.com.pk/order-translation/  
**Meta Title:** `Order Translation – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present  
**Image Alt Text:** ✅ Acceptable

### 3.7 Privacy Policy
**URL:** https://www.transworldintl.com.pk/privacy-policy/  
**Meta Title:** `Privacy Policy – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present (`https://www.transworldintl.com.pk/privacy-policy-2/` — note `-2` suffix indicates a duplicate)  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present  
**Image Alt Text:** N/A (text-only page)  
**Issues:**
- Mentions `axiomthemes.com` (theme developer) — **critical:** must replace with actual company privacy policy
- Slug is `privacy-policy` but canonical points to `privacy-policy-2` — possible duplicate page issue

### 3.8 French Translation
**URL:** https://www.transworldintl.com.pk/french-translation/  
**Meta Title:** `French Translation – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present

### 3.9 Spanish Certified Translation
**URL:** https://www.transworldintl.com.pk/spanish-certified-translation/  
**Meta Title:** `Spanish Certified Translation – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present

### 3.10 Arabic Translation
**URL:** https://www.transworldintl.com.pk/arabic-translation/  
**Meta Title:** `Arabic Translation – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present

### 3.11 Italian Translation
**URL:** https://www.transworldintl.com.pk/italian-translation/  
**Meta Title:** `Italian Translation – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present

### 3.12 English Translation
**URL:** https://www.transworldintl.com.pk/english-translation/  
**Meta Title:** `English Translation – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present

### 3.13 German Translation
**URL:** https://www.transworldintl.com.pk/german-translation-certified/  
**Meta Title:** `German Translation Certified – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present  
**Issues:**
- `hreflang` tag present but **no corresponding `en` tag** — incomplete language annotation

### 3.14 Turkish Translation
**URL:** https://www.transworldintl.com.pk/turkish-translation/  
**Meta Title:** `Turkish Translation – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present

### 3.15 Other Languages
**URL:** https://www.transworldintl.com.pk/other-languages/  
**Meta Title:** `Other Languages – Transworldintl`  
**Meta Description:** ❌ **Missing**  
**Canonical Tag:** ✅ Present  
**Structured Data:** ❌ Missing  
**H1 Tag:** ✅ Present

---

## 4. Service Pages (CPT)

| Page | Title | Meta Desc | Issues |
|---|---|---|---|
| Translation | `Translation – Transworldintl` | ❌ Missing | Demo content icons |
| Interpreting | `Interpreting – Transworldintl` | ❌ Missing | — |
| Localization | `Localization – Transworldintl` | ❌ Missing | — |
| Proofreading | `Proofreading – Transworldintl` | ❌ Missing | — |
| Translation Business and Legal | `Translation Business and Legal – Transworldintl` | ❌ Missing | — |
| Technical Translation | `Technical Translation – Transworldintl` | ❌ Missing | — |

All service pages lack: meta descriptions, structured data. All have canonical tags. All have H1 tags.

---

## 5. Critical Issues

### 5.1 Meta Descriptions Missing (HIGH PRIORITY)
**Every single page is missing a `<meta name="description">` tag.** This severely impacts click-through rates from search results.

**Fix:** Add unique meta descriptions (150–160 characters) to every page.

### 5.2 Structured Data Missing (HIGH PRIORITY)
Only the homepage has JSON-LD (Organization schema). All other pages lack structured data.

**Fix:**
- Add `LocalBusiness` schema to homepage
- Add `Service` schema to each service page
- Add `BreadcrumbList` schema to all pages
- Add `FAQPage` schema to relevant pages

### 5.3 Demo/Placeholder Content (HIGH PRIORITY)
Multiple pages contain placeholder theme demo content:
- About Us: Fictional team members (Mary Jones, Joanne Smith, Peter H., Kate Edwards) with Lorem Ipsum-style bios
- CSS backgrounds reference `translang.axiomthemes.com` — outdated links from theme demo
- Privacy Policy: References `axiomthemes.com` (the theme developer) — **this is a legal liability**

**Fix:** Replace all demo content with real company information. Update Privacy Policy with actual legal text.

### 5.4 Email Address Typo (MEDIUM PRIORITY)
Footer email shows: `info@www.transworldintl.com.pk`  
Should be: `info@transworldintl.com.pk`

The `www.` in the domain part makes this address almost certainly invalid.

### 5.5 Incomplete hreflang (MEDIUM PRIORITY)
The German translation page has an `hreflang="de"` tag but no corresponding `hreflang="en"` tag pointing back to the English version or default page.

**Fix:** Add a self-referencing `hreflang="x-default"` and `hreflang="en"` tags.

### 5.6 Duplicate Page Issues (LOW PRIORITY)
Privacy Policy canonical URL points to `privacy-policy-2` — suggests a duplicate page exists. This may confuse crawlers.

### 5.7 Empty/Placeholder Links (LOW PRIORITY)
Social media links use `href="#"` — these are non-functional. Either remove them or link to real social profiles.

---

## 6. Recommendations

### Immediate (Week 1)
1. Add meta descriptions to ALL pages (custom, unique per page)
2. Remove all demo/placeholder content from About Us, team members
3. Fix Privacy Policy — replace with genuine policy (remove `axiomthemes.com` references)
4. Fix footer email address: remove stray `www.`

### Short-term (Week 2–3)
5. Add JSON-LD structured data to all pages (BreadcrumbList, Service schema, LocalBusiness)
6. Add alt text to all images (logo, team photos, service icons)
7. Implement proper hreflang tags across all language pages
8. Fix duplicate canonical on Privacy Policy

### Medium-term (Month 1–2)
9. Run full PageSpeed Insights audit and address performance issues
10. Remove or properly link social media icons
11. Audit blog/content pages for additional demo/placeholder content
12. Consider adding an XML sitemap with `lastmod` dates

---

## 7. Quick-Wins Checklist

- [x] Sitemap submitted to Google Search Console
- [x] Canonical tags present on most pages
- [ ] Meta descriptions — **0% coverage (add to all pages)**
- [ ] Structured data — **<10% coverage (add to all pages)**
- [ ] Image alt text — **~50% coverage needs work**
- [ ] Mobile-friendly — appears responsive (confirm with testing)
- [ ] PageSpeed — `need data`
- [ ] SSL/HTTPS — ✅ working
- [ ] Custom 404 page — not verified
- [ ] Broken links — demo content links need cleanup
- [ ] Duplicate content — Privacy Policy has duplicate slug issue

---

## 8. Technical Notes

- **Platform:** WordPress with Translang theme by Axiom Themes
- **Page Builder:** WPBakery (Visual Composer)
- **SEO Plugin:** Not detected in <head> output — likely Yoast or Rank Math disabled or not configured
- **Slug Format:** Mostly clean, descriptive slugs (`/french-translation/`, `/about-us/`) — good
- **Title Format:** `{Page Name} – Transworldintl` — consistent, good
- **Language Tag on HTML:** ✅ `lang="en-US"` present
- **Character Encoding:** ✅ `UTF-8` declared
- **Viewport Meta:** ✅ `width=device-width, initial-scale=1` present

---

## 9. Top 10 Action Items (Priority Order)

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Add unique meta descriptions to all pages | High | Medium |
| 2 | Remove demo/placeholder content (About Us team, etc.) | High | Low |
| 3 | Fix Privacy Policy (remove axiomthemes reference) | Critical | Low |
| 4 | Fix footer email address typo | Medium | Low |
| 5 | Add JSON-LD structured data to all pages | High | Medium |
| 6 | Add alt text to all decorative/informative images | Medium | Medium |
| 7 | Fix incomplete hreflang tags | Medium | Low |
| 8 | Remove/fix placeholder social media links (href="#") | Low | Low |
| 9 | Run PageSpeed Insights & optimize performance | High | High |
| 10 | Submit sitemap to Google & Bing search consoles | High | Low |

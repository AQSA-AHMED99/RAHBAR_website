# RAHBAR – AI & AR Rehabilitation Platform (Website)

Static website (HTML + CSS + JS, no build step) for **RAHBAR**, a Senior Design Project at Riphah International University.
Live: https://rahbar-website.vercel.app

## Pages
| Page | File | Clean URL | Main keyword focus |
|---|---|---|---|
| Home | `index.html` | `/` | AI rehabilitation platform, stroke recovery |
| About Us | `about.html` | `/about` | RAHBAR AI AR rehabilitation project, Riphah |
| Features | `features.html` | `/features` | pose tracking, joint angle analysis, ROM |
| Products/Services | `services.html` | `/services` | physiotherapy software, rehab centers, plans |
| FAQs | `faq.html` | `/faq` | AR stroke rehabilitation, seated exercises |
| Contact Us | `contact.html` | `/contact` | book rehabilitation system demo |
| 404 | `404.html` | – | (noindex) |

## SEO implemented
- **On-page:** unique title + meta description per page, one H1 per page with ordered H2/H3, descriptive image file names and alt text, SEO-friendly URLs (`vercel.json` cleanUrls), internal links, external links (WHO, MediaPipe, Riphah), keyword-targeted content, canonical tags, Open Graph / Twitter cards.
- **Structured data (JSON-LD):** Organization, WebSite, SoftwareApplication, BreadcrumbList, FAQPage, ContactPage.
- **Technical:** responsive layout, no CSS framework or icon CDN (single 36 KB stylesheet), optimized images (~30 KB each), lazy-loaded photos, `sitemap.xml` (6 URLs), `robots.txt`, HTTPS (Vercel), cache + security headers in `vercel.json`, accessibility (skip link, aria labels, focus styles, reduced-motion).
- **Analytics / Search Console:** GA4 tag and Google site-verification meta tag are in every page.

## Keywords
- **Primary:** AI rehabilitation platform · AR rehabilitation · stroke rehabilitation software · physiotherapy software
- **Secondary:** pose tracking rehabilitation · joint angle analysis · range of motion (ROM) · seated rehabilitation exercises · stroke recovery · rehabilitation Islamabad / Pakistan · Riphah senior design project

## Before you publish – to-do
1. **Contact email:** replace `your-email@example.com` (contact page, footer, form fallback) with your real public email.
2. **Contact form:** create a free form at https://formspree.io and replace `YOUR_FORM_ID` in the `action` of `contact.html`. Until then the form opens the visitor's email app.
3. **Social links:** the Facebook / Instagram / LinkedIn URLs are placeholders; create the pages and update the links in every file (search for `RAHBAR-Official`, `rahbar_rehab`, `rahbar-healthcare`).
4. **Google Search Console:** add property → verify (tag already present) → *Sitemaps* → submit `sitemap.xml` → *URL inspection* → request indexing for each page.
5. Run https://pagespeed.web.dev and screenshot the results for the report.

## Run locally
Open with VS Code **Live Server** (or `python -m http.server`) and visit `index.html`.

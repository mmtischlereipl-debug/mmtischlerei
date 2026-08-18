# M&M Tischlerei modernization

## Implemented

- Conversion-focused home page based on the existing brand, palette and real photography.
- Persistent WhatsApp and mobile phone actions.
- Clickable phone and email links in navigation, contact page and footer.
- Quick quote form with project type, approximate dimensions, materials, attachments, validation and translated status messages.
- PL, DE and EN support, including enabling the previously dormant English routes.
- Gallery category filters and a “similar project” hand-off to the quote form.
- Canonical, hreflang (PL/DE/EN), Open Graph, Twitter card and LocalBusiness structured data.
- Mobile layouts, touch targets, focus states and accessible labels for key controls.
- Trust and proven-brands sections without claims of formal partnerships.

## Hosting configuration required

The repository intentionally contains no secrets. Copy the existing production values into the hosting provider using `.env.example` as the key list. The form submission and file upload require the existing `GATSBY_FORM_KEY` endpoint to accept `multipart/form-data`.

## Verification note

Translation JSON files were parsed successfully. A full Gatsby build could not be run in the local Codex environment because the package registry certificate chain was rejected. Do not disable TLS verification; run `npm ci && npm run build` in GitHub Actions or the existing hosting environment where the production variables are available.

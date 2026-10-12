# MIS Care — premium interactive GitHub Pages website

## Deploy
1. Unzip, then upload **the files inside this folder** (not the enclosing folder) into your GitHub repository, e.g. `bishooyousry/mis-care-website`.
2. In Repository Settings → Pages, select Deploy from a branch → `main` → `/ (root)`.
3. After deployment, hard refresh your browser (Ctrl+Shift+R).

## Activate form email delivery — REQUIRED
The form uses [FormSubmit](https://formsubmit.co) with **ibrahim_eg76@yahoo.com** as its recipient. The first submitted form normally triggers a **one-time activation/confirmation email to ibrahim_eg76@yahoo.com**. The inbox owner must open that message and click the activation/verification link. Check Spam/Junk if necessary. **Until that happens, requests should not be assumed to arrive.** Submit a test inquiry after verification, confirm the email is received, then test from a second browser/device.

The form uses the FormSubmit AJAX endpoint `https://formsubmit.co/ajax/ibrahim_eg76@yahoo.com` with a standard HTML POST fallback to `https://formsubmit.co/ibrahim_eg76@yahoo.com`. No visitor email application is required. Email delivery is provided by a third-party form service, not directly by GitHub Pages. Email can be filtered/delayed; there is no guaranteed delivery or booking confirmation. For commercial production use, consider a contracted form provider/backend with a confirmed privacy and security agreement.

## Privacy and service notes
This contact form sends entered name, phone, email, optional date, trip type and freeform details to third-party FormSubmit and the recipient Gmail inbox. **Do not collect diagnoses, patient records, insurance details, or other sensitive medical information** without an appropriately secured/compliant intake process. Transport availability, equipment, geographic service area, rates, and actual bookings require staff confirmation. This is a non-emergency contact form and not an ambulance dispatch service.

## Edit
- `index.html`: copy and sections. Logo is also embedded as an inline data image to avoid broken paths.
- `styles.css`: appearance, animations, mobile responsive rules.
- `script.js`: interactivity, scroll animation, and AJAX submission.
- `assets/`: a backup logo and favicon.

Contact number: +1 (551) 263-4257. Email receiving requests: ibrahim_eg76@yahoo.com. 

## If you see an activation error
This cannot be fixed by website code alone. Sign in to **ibrahim_eg76@yahoo.com**, open the FormSubmit activation email (check Junk/Spam), click **Activate Form**, then submit a new test request and verify that it arrives. If the screenshot mentions `miscare97@gmail.com`, your hosted page is running old code. Replace **index.html and script.js**, commit, wait for deployment, and hard-refresh. The cache-busting version query in index.html prevents stale JavaScript. Do not use the Yahoo inbox's password in code.

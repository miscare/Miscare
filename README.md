# MIS Care — premium interactive GitHub Pages website

## Deploy
1. Unzip, then upload **the files inside this folder** (not the enclosing folder) into your GitHub repository, e.g. `bishooyousry/mis-care-website`.
2. In Repository Settings → Pages, select Deploy from a branch → `main` → `/ (root)`.
3. After deployment, hard refresh your browser (Ctrl+Shift+R).

## Activate form email delivery — REQUIRED
The form uses [FormSubmit](https://formsubmit.co) with **ibrahim_eg76@yahoo.com** as its recipient. The first submitted form normally triggers a **one-time activation/confirmation email to miscare97@gmail.com**. The inbox owner must open that message and click the activation/verification link. Check Spam/Junk if necessary. **Until that happens, requests should not be assumed to arrive.** Submit a test inquiry after verification, confirm the email is received, then test from a second browser/device.

The form uses the FormSubmit AJAX endpoint `https://formsubmit.co/ajax/miscare97@gmail.com` with a standard HTML POST fallback to `https://formsubmit.co/miscare97@gmail.com`. No visitor email application is required. Email delivery is provided by a third-party form service, not directly by GitHub Pages. Email can be filtered/delayed; there is no guaranteed delivery or booking confirmation. For commercial production use, consider a contracted form provider/backend with a confirmed privacy and security agreement.

## Privacy and service notes
This contact form sends entered name, phone, email, optional date, trip type and freeform details to third-party FormSubmit and the recipient Gmail inbox. **Do not collect diagnoses, patient records, insurance details, or other sensitive medical information** without an appropriately secured/compliant intake process. Transport availability, equipment, geographic service area, rates, and actual bookings require staff confirmation. This is a non-emergency contact form and not an ambulance dispatch service.

## Edit
- `index.html`: copy and sections. Logo is also embedded as an inline data image to avoid broken paths.
- `styles.css`: appearance, animations, mobile responsive rules.
- `script.js`: interactivity, scroll animation, and AJAX submission.
- `assets/`: a backup logo and favicon.

Contact number: +1 (551) 263-4257. Public contact email: ibrahim_eg76@yahoo.com. Form inbox: miscare97@gmail.com. 

## Two email addresses

- **Visible public contact:** `ibrahim_eg76@yahoo.com` (email links and visitor-facing error messages).
- **Form submission recipient:** `miscare97@gmail.com` (FormSubmit backend destination).

**Activation:** The owner of `miscare97@gmail.com` must open the FormSubmit activation email and approve this form. Complete a test submission after activation to verify inbox delivery. The recipient address is embedded in client-side source code by FormSubmit; it is not a secret backend address even if it is not displayed on the page. For a genuinely private destination, use a server-side relay or hosted form provider supporting private recipient configuration.

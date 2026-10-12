# MIS Care — Medical Transportation Website

A responsive, static website ready for GitHub Pages. Built with HTML, CSS, and JavaScript. No build step, hosting subscription, or third-party libraries required.

## Files
- `index.html` — site content and structure
- `styles.css` — desktop and mobile design
- `script.js` — mobile navigation and email inquiry form
- `assets/mis-care-logo.png` — logo processed from the supplied artwork
- `assets/favicon.png` — browser tab icon

## Publish to GitHub Pages
1. Create a **public** repository on GitHub (for example `mis-care-website`).
2. Upload the **contents** of this folder to the repository root — especially `index.html`.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main**, folder **/(root)**, and click **Save**.
6. After GitHub deploys, open `https://YOUR-USERNAME.github.io/mis-care-website/`.

You can also host the same folder on any static hosting service.

## Important notes
- **Contact:** phone +1 (551) 263-4257; email ibrahim_eg76@yahoo.com.
- The inquiry form uses `mailto:`. It launches the visitor's own configured email app with a prefilled email. **It does not directly submit a form** and requires the visitor to send the message. This is intentional for a serverless GitHub Pages site.
- If direct website form submissions are needed, connect a trusted form backend (e.g. Formspree) and configure its account and privacy/security settings.
- The text deliberately avoids unverified business claims about operating hours, licenses, vehicle types, specific service area, insurance acceptance, wheelchair accessibility, or service guarantees. Confirm these before adding them.
- Do not collect protected medical data or sensitive personal health details through a basic email or public form.
- For emergencies, visitors are directed to call 911; the website does not advertise emergency ambulance services.


## Logo fix
The MIS Care brand logo and favicon are embedded directly inside `index.html`, so missing asset directories cannot break the header/footer logo. Upload `index.html`, `styles.css`, and `script.js` at the root of your GitHub repository. The `assets/` folder is also included for future edits.

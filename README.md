# Love, Parenting & Autism — Website

Official website for the LPA brand by Nicky Stixx.

## Structure

```
/
├── index.html          ← Main single-page site
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Nav, scroll, form behaviour
├── CNAME               ← Custom domain for GitHub Pages
└── README.md
```

## Deploying to GitHub Pages

1. Push all files to the `main` branch of this repo
2. Go to **Settings → Pages** in GitHub
3. Set source to **Deploy from a branch → main → / (root)**
4. GitHub will publish the site — it may take a minute or two
5. Your site will live at `https://stixxnicky-lpa.github.io/loveparentingandautism`

## Connecting Your Custom Domain (Namecheap)

After GitHub Pages is enabled, add these DNS records in Namecheap:

**A Records** (for the apex domain `loveparentingandautism.com`):
| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record** (for www):
| Type | Host | Value |
|------|------|-------|
| CNAME | www | stixxnicky-lpa.github.io |

Then in GitHub → Settings → Pages → Custom domain: enter `loveparentingandautism.com`
Tick **Enforce HTTPS** once it propagates (up to 24–48 hrs).

## Contact Form

The form currently shows a success message only. To make it actually send emails, sign up free at [Formspree](https://formspree.io):

1. Create a form at formspree.io and get your form endpoint
2. In `index.html`, replace the `<button onclick="handleFormSubmit()">` button with:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="First name is fine" required />
  <input type="email" name="email" placeholder="your@email.com" required />
  <textarea name="message" placeholder="Tell me what's on your mind…" required></textarea>
  <button type="submit" class="btn btn-gold" style="width:100%; margin-top:0.5rem;">Send message</button>
</form>
```

## Amazon Links

Search `YOUR-BOOK-ID` in `index.html` and replace with your actual Amazon ASIN/URL.

## To Update

Edit `index.html` directly to:
- Add new books to the Book section
- Add new guide cards to the Guides section
- Update Etsy links
- Change any copy

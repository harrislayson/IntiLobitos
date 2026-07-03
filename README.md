# Kapchan — creative space, Lobitos, Peru

A clean, bilingual (EN/ES) one-page site for **Kapchan**, the creative space in
Lobitos that hosts artist residencies and free art programs for the community.
Plain HTML/CSS/JS — no build step. Sister site to the artist's personal site at
**tataintiart.com**.

```
index.html    · the page
styles.css    · styling
app.js        · language toggle, space gallery, lightbox, WhatsApp links
config.js     · ★ edit contact details + the artist-site link here
images/       · brand (Kapchan mural), space photos, gallery
```

## Editing
- **Contact / WhatsApp / artist link:** edit `config.js` (`whatsapp` in
  international format, digits only; `artistSite` points to tataintiart.com).
- **Text:** in `app.js`, the `I18N` object — change both `en` and `es`.
- **Space photos:** the `SPACE` array in `app.js`; drop files into `images/gallery/`.

## Publish (GitHub Pages)
Repo: **github.com/harrislayson/intilobitos** → Settings → Pages →
Deploy from a branch → `main` / `(root)`. Live at
`https://harrislayson.github.io/intilobitos/`.

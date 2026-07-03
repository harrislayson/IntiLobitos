/* ============================================================
   Kapchay — app.js  (bilingual EN/ES, space gallery + lightbox)
   ============================================================ */

const I18N = {
  en: {
    meta_desc: "Kapchay is a cultural and creative center in Lobitos, Peru, hosted by the artist Inti — home to artist residencies and free art programs for the community.",
    header_loc: "Lobitos · Piura · Peru",
    nav_about: "About", nav_residency: "Residency", nav_programs: "Programs",
    nav_space: "The Space", nav_artist: "The Artist", nav_contact: "Contact",

    hero_eyebrow: "Cultural & creative center · Lobitos, Peru",
    hero_sub: "A cultural and creative center on the north coast of Peru, hosted by the artist Inti — home to artist residencies and free art programs for the community.",
    hero_cta1: "Artist residencies", hero_cta2: "Education programs",

    about_eyebrow: "Hosted by Inti",
    about_title: "What is Kapchay?",
    about_p1: "Kapchay is a cultural and creative center in Lobitos, a surf town on the desert coast of Piura, in northern Peru. Once an empty warehouse, it is now a living studio — white brick walls, open light, murals on every surface — where people come to make, live and learn together.",
    about_p2: "Kapchay is hosted by the artist Inti, who lives and works here and keeps its doors open to visiting artists and local children alike. Here, art is something shared.",

    res_eyebrow: "Artists in residence",
    res_title: "Live and create at Kapchay",
    res_p1: "Visiting artists are welcome to live and work in the space alongside Inti. Residents get room to make, access to the studio and its materials, and the slow rhythm of Lobitos — the surf, the desert light, and the community around the space.",
    res_li1: "A place to live inside a working studio",
    res_li2: "Studio space and shared materials",
    res_li3: "Days by the ocean in Lobitos",
    res_cta: "Apply for a residency",

    prog_eyebrow: "For the community",
    prog_title: "Free art programs",
    prog_free: "Free",
    prog_p1: "Kapchay opens its doors to local schoolchildren with free, hands-on art workshops — drawing, painting and printmaking in a real artist's space.",
    prog_p2: "Teachers, schools and community groups are welcome to arrange a visit or a workshop.",
    prog_cta: "Bring a group",

    space_eyebrow: "Inside Kapchay",
    space_title: "The space",
    space_lede: "The studio, the murals, the workshops and the people who pass through. Tap any photo to enlarge.",

    artist_eyebrow: "The host of Kapchay",
    artist_title: "Inti",
    artist_p1: "Inti is the self-taught artist who hosts Kapchay, the cultural and creative center he built and runs in Lobitos — known across town for his fish, his faces and his tag. See his paintings, prints and hand-painted clothing on his personal website.",
    artist_cta: "Visit tataintiart.com",

    contact_eyebrow: "Get in touch",
    contact_title: "Visit, stay, or bring a group",
    contact_lede: "Kapchay is in Lobitos, Piura. The fastest way to reach us is by message.",
    contact_loc: "Lobitos · Piura · Peru",

    footer_loc: "Lobitos · Piura · Peru",
    footer_credit: "Art by Inti · tataintiart.com",

    btn_whatsapp: "Message on WhatsApp",
    btn_instagram: "Instagram",
    btn_email: "Email"
  },

  es: {
    meta_desc: "Kapchay es un centro cultural y creativo en Lobitos, Perú, dirigido por el artista Inti — hogar de residencias artísticas y programas de arte gratuitos para la comunidad.",
    header_loc: "Lobitos · Piura · Perú",
    nav_about: "El espacio", nav_residency: "Residencia", nav_programs: "Programas",
    nav_space: "El Lugar", nav_artist: "El Artista", nav_contact: "Contacto",

    hero_eyebrow: "Centro cultural y creativo · Lobitos, Perú",
    hero_sub: "Un centro cultural y creativo en la costa norte del Perú, dirigido por el artista Inti — hogar de residencias artísticas y programas de arte gratuitos para la comunidad.",
    hero_cta1: "Residencias artísticas", hero_cta2: "Programas educativos",

    about_eyebrow: "Anfitrión: Inti",
    about_title: "¿Qué es Kapchay?",
    about_p1: "Kapchay es un centro cultural y creativo en Lobitos, un pueblo de surf en la costa desértica de Piura, al norte del Perú. Antes un galpón vacío, hoy es un taller vivo — paredes de ladrillo blanco, luz abierta, murales en cada rincón — donde la gente viene a crear, vivir y aprender en comunidad.",
    about_p2: "Kapchay está a cargo del artista Inti, quien vive y trabaja aquí y mantiene sus puertas abiertas tanto para artistas visitantes como para los niños de la zona. Aquí, el arte es algo compartido.",

    res_eyebrow: "Artistas en residencia",
    res_title: "Vive y crea en Kapchay",
    res_p1: "Los artistas visitantes son bienvenidos a vivir y trabajar en el espacio junto a Inti. Los residentes tienen lugar para crear, acceso al taller y sus materiales, y el ritmo tranquilo de Lobitos — el surf, la luz del desierto y la comunidad que rodea el espacio.",
    res_li1: "Un lugar para vivir dentro de un taller en activo",
    res_li2: "Espacio de taller y materiales compartidos",
    res_li3: "Días junto al mar en Lobitos",
    res_cta: "Postular a una residencia",

    prog_eyebrow: "Para la comunidad",
    prog_title: "Programas de arte gratuitos",
    prog_free: "Gratis",
    prog_p1: "Kapchay abre sus puertas a los escolares de la zona con talleres de arte gratuitos y prácticos — dibujo, pintura y grabado en el espacio real de un artista.",
    prog_p2: "Maestros, colegios y grupos de la comunidad son bienvenidos a coordinar una visita o un taller.",
    prog_cta: "Traer un grupo",

    space_eyebrow: "Dentro de Kapchay",
    space_title: "El lugar",
    space_lede: "El taller, los murales, los talleres y las personas que pasan por aquí. Toca cualquier foto para ampliarla.",

    artist_eyebrow: "El anfitrión de Kapchay",
    artist_title: "Inti",
    artist_p1: "Inti es el artista autodidacta que dirige Kapchay, el centro cultural y creativo que construyó y mantiene en Lobitos — conocido en todo el pueblo por sus peces, sus rostros y su firma. Mira sus pinturas, grabados y ropa pintada a mano en su página personal.",
    artist_cta: "Visita tataintiart.com",

    contact_eyebrow: "Escríbenos",
    contact_title: "Visita, quédate o trae un grupo",
    contact_lede: "Kapchay está en Lobitos, Piura. La forma más rápida de contactarnos es por mensaje.",
    contact_loc: "Lobitos · Piura · Perú",

    footer_loc: "Lobitos · Piura · Perú",
    footer_credit: "Arte de Inti · tataintiart.com",

    btn_whatsapp: "Escribir por WhatsApp",
    btn_instagram: "Instagram",
    btn_email: "Correo"
  }
};

const WA_MESSAGES = {
  en: {
    general:   "Hola! I found the Kapchay website and would love to get in touch.",
    residency: "Hola! I'm interested in an artist residency at Kapchay in Lobitos. Could you tell me more?",
    programs:  "Hola! I'd like to ask about Kapchay's free art programs for children / groups."
  },
  es: {
    general:   "¡Hola! Encontré la página de Kapchay y me encantaría ponerme en contacto.",
    residency: "¡Hola! Me interesa una residencia artística en Kapchay, en Lobitos. ¿Me cuentan más?",
    programs:  "¡Hola! Quisiera consultar por los programas de arte gratuitos de Kapchay para niños / grupos."
  }
};

const SPACE = [
  "images/gallery/k01.jpg","images/gallery/k02.jpg","images/gallery/k03.jpg",
  "images/gallery/k04.jpg","images/gallery/k05.jpg","images/gallery/k06.jpg",
  "images/gallery/k07.jpg","images/gallery/k08.jpg","images/gallery/k09.jpg",
  "images/gallery/k10.jpg","images/gallery/k11.jpg","images/gallery/k12.jpg"
];

let currentLang = localStorage.getItem("kapchay-lang") ||
  ((navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en");

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("kapchay-lang", lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] == null) return;
    if (el.tagName === "META") el.setAttribute("content", dict[key]);
    else el.innerHTML = dict[key];
  });
  const t = document.getElementById("langToggle");
  t.querySelector(".lang-en").classList.toggle("active", lang === "en");
  t.querySelector(".lang-es").classList.toggle("active", lang === "es");
  buildContactButtons();
  refreshWhatsAppLinks();
}

function waHref(kind){
  const num = (window.SITE_CONFIG && SITE_CONFIG.whatsapp || "").replace(/\D/g, "");
  const msg = WA_MESSAGES[currentLang][kind] || WA_MESSAGES[currentLang].general;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}
function refreshWhatsAppLinks(){
  document.querySelectorAll(".wa-link").forEach(a => {
    a.setAttribute("href", waHref(a.dataset.msg || "general"));
    a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener");
  });
}
function buildContactButtons(){
  const c = document.getElementById("contactBtns");
  if (!c) return;
  const cfg = window.SITE_CONFIG || {};
  const dict = I18N[currentLang];
  c.innerHTML = "";
  if (cfg.whatsapp)
    c.insertAdjacentHTML("beforeend", `<a class="btn btn-solid" target="_blank" rel="noopener" href="${waHref("general")}">${dict.btn_whatsapp}</a>`);
  if (cfg.instagram)
    c.insertAdjacentHTML("beforeend", `<a class="btn btn-ghost" style="color:var(--ink);border-color:var(--line)" target="_blank" rel="noopener" href="https://instagram.com/${cfg.instagram}">${dict.btn_instagram}</a>`);
  if (cfg.email)
    c.insertAdjacentHTML("beforeend", `<a class="btn btn-ghost" style="color:var(--ink);border-color:var(--line)" href="mailto:${cfg.email}">${dict.btn_email}</a>`);
  if (cfg.location && cfg.location[currentLang]){
    const loc = document.getElementById("contactLoc");
    if (loc) loc.textContent = cfg.location[currentLang];
  }
}

/* apply artist-site link from config (falls back to hard-coded href) */
function applyArtistLink(){
  const url = (window.SITE_CONFIG && SITE_CONFIG.artistSite) || "https://tataintiart.com";
  ["artistLink","footArtist"].forEach(id => { const a = document.getElementById(id); if (a) a.href = url; });
}

/* Space gallery + lightbox */
function buildGallery(){
  const g = document.getElementById("spaceGrid");
  if (!g) return;
  g.innerHTML = SPACE.map((src, i) =>
    `<figure data-i="${i}"><span class="frame"><img src="${src}" alt="Inside Kapchay" loading="lazy"></span></figure>`
  ).join("");
  g.querySelectorAll("figure").forEach(f =>
    f.addEventListener("click", () => openLightbox(+f.dataset.i)));
}
let lbIndex = 0;
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
function openLightbox(i){ lbIndex = i; lbImg.src = SPACE[i]; lb.classList.add("open");
  lb.setAttribute("aria-hidden","false"); document.body.style.overflow = "hidden"; }
function closeLightbox(){ lb.classList.remove("open"); lb.setAttribute("aria-hidden","true");
  document.body.style.overflow = ""; }
function step(d){ lbIndex = (lbIndex + d + SPACE.length) % SPACE.length; lbImg.src = SPACE[lbIndex]; }

document.addEventListener("DOMContentLoaded", () => {
  buildGallery();
  applyArtistLink();
  applyLang(currentLang);

  document.getElementById("langToggle").addEventListener("click", () =>
    applyLang(currentLang === "en" ? "es" : "en"));

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.querySelector(".nav");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => step(-1));
  document.getElementById("lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
});

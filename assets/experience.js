/* Jong Barbershop — bilingual, accessible, static-site interactions.
   Business contacts are intentionally unverified; no outgoing contact links exist. */
(() => {
  "use strict";

  // One source of truth. Add owner-confirmed values only after authorization.
  const CONTACT = Object.freeze({
    verified: false,
    whatsapp: null,
    telephone: null,
    directions: null
  });

  const translations = {
    bm: {
      demo: "Konsep demo untuk portfolio · Bukan laman rasmi Jong Barbershop",
      backTop: "Jong Barbershop — ke utama",
      navLabel: "Navigasi utama", mobileNavLabel: "Navigasi telefon", menuDialog: "Menu navigasi",
      langLabel: "Bahasa laman web", menuOpen: "Buka menu", menuClose: "Tutup menu", menuButton: "Menu",
      navHome: "Utama", navGallery: "Inspirasi Potongan", navAbout: "Tentang Jong", navContact: "Hubungi",
      menuCaption: "Jong Barbershop · Konsep portfolio",
      heroEyebrow: "JONG BARBERSHOP / KONSEP PORTFOLIO",
      heroTitle: '<span class="hero-line">POTONGAN</span><span class="hero-line accent">KEMAS.</span><span class="hero-line">GAYA PADU.</span>',
      heroCopy: "Inspirasi potongan yang berani. Gaya anda, pilihan anda. Terokai konsep laman Jong Barbershop.",
      heroContact: "Hubungi Jong", heroShowcase: "Lihat Hasil",
      contactUnverified: "Demo sahaja · Maklumat hubungan belum disahkan",
      photoLabel: "Foto ilustrasi · Bukan premis sebenar", scrollGallery: "Skrol ke galeri", scrollLabel: "TEROKAI",
      galleryEyebrow: "02 / GALERI INSPIRASI",
      galleryTitle: 'INSPIRASI<br><em>POTONGAN.</em>',
      galleryCopy: "Pilihan foto rujukan untuk memperlihatkan arah visual demo. Ini bukan hasil kerja sebenar Jong Barbershop.",
      galleryHint: "LERET UNTUK LIHAT LAGI", galleryAria: "Galeri foto inspirasi",
      galleryPrev: "Gambar sebelumnya", galleryNext: "Gambar seterusnya",
      galleryCard1: "RUJUKAN 01", galleryCard2: "RUJUKAN 02", galleryCard3: "RUJUKAN 03", galleryCard4: "RUJUKAN 04",
      imageMark: "INSPIRASI / DEMO",
      altGallery1: "Foto ilustrasi inspirasi potongan rambut pertama, bukan kerja Jong",
      altGallery2: "Foto ilustrasi inspirasi potongan rambut kedua, bukan kerja Jong",
      altGallery3: "Foto ilustrasi inspirasi potongan rambut ketiga, bukan kerja Jong",
      altGallery4: "Foto ilustrasi inspirasi potongan rambut keempat, bukan kerja Jong",
      galleryDisclosure: "* Semua imej galeri ialah foto ilustrasi. Kami belum menerima foto potongan sebenar Jong Barbershop yang diluluskan untuk kegunaan laman web.",
      experienceEyebrow: "03 / TENTANG KONSEP",
      experienceTitle: 'KENALI JONG<br><em>BARBERSHOP.</em>',
      experienceSubhead: "SATU KEDAI.<br>PELBAGAI GAYA.",
      experienceCopy: "Demo ini mengambil inspirasi daripada identiti logo Jong. Foto suasana masih sekadar gambaran visual dan akan digantikan dengan gambar sebenar selepas mendapat kebenaran pemilik.",
      experienceCaption: "Ruang untuk foto sebenar kedai, barber dan suasana Jong pada versi seterusnya.",
      experienceMainAlt: "Gambar suasana kedai rambut sebagai ilustrasi, bukan premis Jong",
      experienceSmallAlt: "Gambar peralatan gunting rambut sebagai ilustrasi",
      photoShort: "Ilustrasi",
      closingEyebrow: "04 / BERHUBUNG",
      closingTitle: "NAK GAYA BARU?<br><em>JOM HUBUNGI JONG.</em>",
      closingCopy: "Laman ini ialah konsep demo. Saluran WhatsApp, alamat dan waktu operasi masih perlu disahkan oleh pemilik sebelum dipautkan.",
      closingButton: "Hubungi Jong", demoTag: "DEMO",
      contactStateTitle: "Maklumat hubungan belum disahkan",
      contactStateCopy: "Butang ini ialah demonstrasi sahaja. Tiada nombor telefon, pautan WhatsApp atau lokasi yang belum disahkan digunakan.",
      footerNotice: "Imej hanyalah ilustrasi. Tiada hubungan rasmi atau maklumat perniagaan yang telah disahkan.",
      backTopLink: "KE ATAS", languageAnnouncement: "Bahasa Melayu dipilih",
      title: "Jong Barbershop — Konsep Portfolio",
      description: "Konsep portfolio tidak rasmi untuk Jong Barbershop. Lihat inspirasi gaya rambut dan konsep pengalaman kedai. Maklumat perhubungan belum disahkan.",
      openGraphDescription: "Konsep demo tidak rasmi. Gambar inspirasi dan maklumat hubungan belum disahkan."
    },
    en: {
      demo: "Portfolio demo concept · Not the official Jong Barbershop website",
      backTop: "Jong Barbershop — back to top",
      navLabel: "Main navigation", mobileNavLabel: "Mobile navigation", menuDialog: "Navigation menu",
      langLabel: "Website language", menuOpen: "Open menu", menuClose: "Close menu", menuButton: "Menu",
      navHome: "Home", navGallery: "Haircut Inspiration", navAbout: "About Jong", navContact: "Contact",
      menuCaption: "Jong Barbershop · Portfolio concept",
      heroEyebrow: "JONG BARBERSHOP / PORTFOLIO CONCEPT",
      heroTitle: '<span class="hero-line">SHARP CUTS.</span><span class="hero-line accent">FRESH STYLE.</span>',
      heroCopy: "Bold haircut inspiration. Your look, your choice. Explore this concept website for Jong Barbershop.",
      heroContact: "Contact Jong", heroShowcase: "View Styles",
      contactUnverified: "Demo only · Contact details not yet verified",
      photoLabel: "Illustrative photo · Not the actual shop", scrollGallery: "Scroll to gallery", scrollLabel: "EXPLORE",
      galleryEyebrow: "02 / INSPIRATION GALLERY",
      galleryTitle: 'HAIRCUT<br><em>INSPIRATION.</em>',
      galleryCopy: "Reference photography to demonstrate the site's visual direction. These are not photos of Jong Barbershop's work.",
      galleryHint: "SWIPE TO EXPLORE", galleryAria: "Haircut inspiration gallery",
      galleryPrev: "Previous image", galleryNext: "Next image",
      galleryCard1: "REFERENCE 01", galleryCard2: "REFERENCE 02", galleryCard3: "REFERENCE 03", galleryCard4: "REFERENCE 04",
      imageMark: "INSPIRATION / DEMO",
      altGallery1: "Illustrative haircut inspiration photo one, not Jong's work",
      altGallery2: "Illustrative haircut inspiration photo two, not Jong's work",
      altGallery3: "Illustrative haircut inspiration photo three, not Jong's work",
      altGallery4: "Illustrative haircut inspiration photo four, not Jong's work",
      galleryDisclosure: "* All gallery images are illustrative reference photos. Approved photographs of Jong Barbershop's real haircuts have not yet been provided.",
      experienceEyebrow: "03 / ABOUT THIS CONCEPT",
      experienceTitle: 'GET TO KNOW<br><em>JONG BARBERSHOP.</em>',
      experienceSubhead: "ONE SHOP.<br>MANY LOOKS.",
      experienceCopy: "This demo takes visual inspiration from Jong's existing logo. The atmosphere photographs are illustrative only and would be replaced with real approved images of the shop.",
      experienceCaption: "Reserved for approved photos of Jong's actual premises, barbers and shop atmosphere.",
      experienceMainAlt: "Illustrative hair salon atmosphere, not Jong's actual premises",
      experienceSmallAlt: "Illustrative haircut tools photo",
      photoShort: "Illustration",
      closingEyebrow: "04 / GET IN TOUCH",
      closingTitle: "READY FOR A NEW LOOK?<br><em>CONTACT JONG.</em>",
      closingCopy: "This is a demo concept. WhatsApp, address and opening hours still need to be confirmed by the owner before links can be activated.",
      closingButton: "Contact Jong", demoTag: "DEMO",
      contactStateTitle: "Contact details are not yet verified",
      contactStateCopy: "This button is a demonstration only. No unverified phone number, WhatsApp link or map destination is used.",
      footerNotice: "Photography is illustrative. No official affiliation or verified business details are implied.",
      backTopLink: "BACK TO TOP", languageAnnouncement: "English selected",
      title: "Jong Barbershop — Portfolio Concept",
      description: "Unofficial portfolio concept for Jong Barbershop. Explore haircut inspiration and a sample shop experience. Contact details are unverified.",
      openGraphDescription: "Unofficial concept demo. Inspiration photos and unverified business contact details."
    }
  };

  const storageKey = "jong-demo-language";
  const root = document.documentElement;
  const status = document.getElementById("languageStatus");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = mobileMenu ? [...mobileMenu.querySelectorAll('a[href^="#"]')] : [];
  const gallery = document.getElementById("galleryTrack");
  const galleryCards = gallery ? [...gallery.querySelectorAll("[data-gallery-card]")] : [];
  const galleryPrev = document.getElementById("galleryPrev");
  const galleryNext = document.getElementById("galleryNext");
  const galleryCount = document.getElementById("galleryCount");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const mobileGallery = window.matchMedia("(max-width: 640px)");
  let language = "bm";
  let galleryIndex = 0;
  let galleryFrame = 0;
  let menuOpen = false;

  try {
    language = localStorage.getItem(storageKey) === "en" ? "en" : "bm";
  } catch (_) { /* Storage can be blocked for file:// or privacy modes. */ }

  function translate(nextLanguage, announce = false) {
    if (!Object.prototype.hasOwnProperty.call(translations, nextLanguage)) return;
    language = nextLanguage;
    const t = translations[language];
    root.lang = language === "bm" ? "ms" : "en";

    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = t[node.dataset.i18n];
      if (value !== undefined) node.textContent = value;
    });
    // Translation HTML comes only from static strings in this source file.
    document.querySelectorAll("[data-i18n-html]").forEach(node => {
      const value = t[node.dataset.i18nHtml];
      if (value !== undefined) node.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(node => {
      const value = t[node.dataset.i18nAria];
      if (value !== undefined) node.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(node => {
      const value = t[node.dataset.i18nAlt];
      if (value !== undefined) node.setAttribute("alt", value);
    });
    document.querySelectorAll(".language-button").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });

    document.title = t.title;
    const meta = document.querySelector('meta[name="description"]');
    const og = document.querySelector('meta[property="og:description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (meta) meta.content = t.description;
    if (og) og.content = t.openGraphDescription;
    if (ogTitle) ogTitle.content = t.title;
    if (menuToggle) menuToggle.setAttribute("aria-label", t[menuOpen ? "menuClose" : "menuOpen"]);
    if (status && announce) status.textContent = t.languageAnnouncement;
  }

  document.querySelectorAll(".language-button").forEach(button => {
    button.addEventListener("click", () => {
      const next = button.dataset.language;
      if (next === language) return;
      root.classList.add("language-changing");
      translate(next, true);
      try { localStorage.setItem(storageKey, next); } catch (_) {}
      window.requestAnimationFrame(() => root.classList.remove("language-changing"));
    });
  });

  // Overlay navigation: Escape, focus trap, focus return, scroll lock.
  function closeMenu(restoreFocus = true) {
    if (!menuOpen) return;
    menuOpen = false;
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.inert = true;
    menuToggle.setAttribute("aria-label", translations[language].menuOpen);
    if (restoreFocus) menuToggle.focus();
  }
  function openMenu() {
    if (menuOpen) return;
    menuOpen = true;
    mobileMenu.inert = false;
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", translations[language].menuClose);
    if (menuLinks[0]) menuLinks[0].focus();
  }
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => menuOpen ? closeMenu() : openMenu());
    menuLinks.forEach(link => link.addEventListener("click", () => closeMenu(false)));
    document.addEventListener("keydown", event => {
      if (!menuOpen) return;
      if (event.key === "Escape") {
        event.preventDefault(); closeMenu(); return;
      }
      if (event.key !== "Tab") return;
      // The visible X is in the sticky header, alongside the modal navigation.
      const focusables = [menuToggle, ...menuLinks];
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      } else if (!focusables.includes(document.activeElement)) {
        event.preventDefault(); menuLinks[0]?.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 850 && menuOpen) closeMenu();
    }, {passive:true});
  }

  // Native horizontal scroll snapping supports touch/swipe even without JS.
  function updateGallery(index) {
    galleryIndex = Math.max(0,Math.min(galleryCards.length - 1,index));
    if (galleryCount) {
      galleryCount.innerHTML = String(galleryIndex + 1).padStart(2,"0") + " <span>/ " +
        String(galleryCards.length).padStart(2,"0") + "</span>";
    }
    if (galleryPrev) galleryPrev.disabled = galleryIndex === 0;
    if (galleryNext) galleryNext.disabled = galleryIndex === galleryCards.length - 1;
  }
  function moveGallery(index) {
    if (!gallery || !galleryCards.length || !mobileGallery.matches) return;
    const destination = Math.max(0,Math.min(galleryCards.length - 1,index));
    const card = galleryCards[destination];
    const start = galleryCards[0];
    gallery.scrollTo({
      left: card.offsetLeft - start.offsetLeft,
      behavior: reduceMotion.matches ? "instant" : "smooth"
    });
    updateGallery(destination);
  }
  if (gallery && galleryCards.length) {
    updateGallery(0);
    galleryPrev?.addEventListener("click", () => moveGallery(galleryIndex - 1));
    galleryNext?.addEventListener("click", () => moveGallery(galleryIndex + 1));
    gallery.addEventListener("keydown", event => {
      if (!mobileGallery.matches) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        moveGallery(galleryIndex + (event.key === "ArrowRight" ? 1 : -1));
      }
    });
    gallery.addEventListener("scroll", () => {
      if (!mobileGallery.matches || galleryFrame) return;
      galleryFrame = window.requestAnimationFrame(() => {
        galleryFrame = 0;
        const first = galleryCards[0].offsetLeft;
        let best = 0, closest = Infinity;
        galleryCards.forEach((card, i) => {
          const distance = Math.abs((card.offsetLeft - first) - gallery.scrollLeft);
          if (distance < closest) { closest = distance; best = i; }
        });
        updateGallery(best);
      });
    }, {passive:true});
  }

  // Motion added only after an observer has been successfully created.
  function activateReveals() {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;
    const elements = [...document.querySelectorAll("[data-reveal]")];
    if (!elements.length) return;
    try {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, {threshold:0.08, rootMargin:"0px 0px -12px 0px"});
      elements.forEach(node => observer.observe(node));
      root.classList.add("motion-ready");
    } catch (_) {
      root.classList.remove("motion-ready");
    }
  }
  activateReveals();
  reduceMotion.addEventListener?.("change", e => {
    if (e.matches) root.classList.remove("motion-ready");
  });

  // Deliberately no unverified contact URLs. Preserve truthful demo-only UI.
  if (CONTACT.verified) {
    // Future verified integration may be added here after the owner approves it.
  }
  translate(language);
})();

/* Jong Barbershop demo — bilingual text, accessible navigation and lightweight motion. */
(() => {
  "use strict";

  const words = {
    bm: {
      demo: "Konsep demo untuk portfolio · Bukan laman rasmi Jong Barbershop",
      navLabel: "Navigasi utama",
      topLabel: "Jong Barbershop - ke atas",
      navGaya: "Inspirasi Gaya",
      navAbout: "Tentang",
      navServices: "Potong Rambut",
      navLocation: "Lokasi",
      waQuestion: "Tanya di WhatsApp",
      heroTitle: "POTONGAN<br><em>KEMAS.</em><br>GAYA<br>SENDIRI.",
      heroSub: "Gaya rambut bermula dengan pilihan anda. Cari inspirasi, tunjuk gaya kegemaran dan singgah ke Jong Barbershop di Taman Puchong Prima.",
      heroImageAlt: "Gambar inspirasi suasana kedai gunting rambut, bukan Jong Barbershop",
      lookButton: "Lihat Gaya",
      tickerStyle: "GAYA ANDA",
      galleryEyebrow: "01 / Pilihan Gaya",
      galleryTitle: "CARI GAYA<br>ANDA<span style=\"color:var(--copper)\">.</span>",
      galleryLead: "Tak pasti nak potong macam mana? Simpan gambar inspirasi dan tunjukkan kepada barber untuk bincang gaya yang anda suka.",
      shortCut: "Potongan Pendek",
      cleanLook: "Gaya Kemas",
      modernStyle: "Gaya Moden",
      classicCut: "Gaya Klasik",
      photoShortAlt: "Foto inspirasi potongan rambut pendek",
      photoCleanAlt: "Foto inspirasi gaya rambut kemas",
      photoModernAlt: "Foto inspirasi potongan rambut lelaki",
      photoClassicAlt: "Foto inspirasi gaya rambut klasik",
      galleryNote: "* Semua gambar ialah ilustrasi/inspirasi umum, bukan hasil kerja sebenar atau gambar premis Jong Barbershop. Gaya yang tersedia perlu disahkan dengan kedai.",
      aboutPhotoAlt: "Gambar ilustrasi kedai gunting rambut",
      photoNote: "Gambar Ilustrasi Sahaja",
      aboutEyebrow: "Gaya Anda, Pilihan Anda",
      aboutTitle: "GAYA ANDA.<br><span style=\"color:var(--copper)\">CARA ANDA.</span>",
      aboutLead: "Daripada potongan ringkas hingga inspirasi gaya baharu, semuanya bermula dengan apa yang anda inginkan. Bawa gambar rujukan dan bincang pilihan yang sesuai sebelum potong rambut.",
      findPuchong: "Cari Kami di Puchong",
      servicesEyebrow: "03 / Sebelum Singgah",
      servicesTitle: "SEMAK<br>DULU<span style=\"color:var(--copper)\">.</span>",
      servicesLead: "Maklumat asas untuk membantu anda merancang kunjungan. Sahkan jenis potongan, harga dan waktu operasi terus dengan kedai.",
      service1: "Potong Rambut",
      service1Lead: "Hubungi kedai untuk bertanya tentang jenis potongan rambut yang tersedia.",
      service2: "Rujukan Gaya",
      service2Lead: "Bawa gambar gaya yang anda suka dan semak dengan barber sebelum memulakan potongan.",
      service3: "Semak Dahulu",
      service3Lead: "Tanya harga semasa, waktu operasi dan sama ada perlu membuat tempahan.",
      contactEyebrow: "Ada soalan?",
      contactTitle: "NAK POTONG<br>RAMBUT?",
      contactButton: "Hubungi Kedai",
      locationEyebrow: "04 / Cari Kami",
      locationTitle: "LOKASI<br><span style=\"color:var(--copper)\">KAMI.</span>",
      addressLabel: "ALAMAT KEDAI",
      locationNote: "Hubungi dahulu untuk mengesahkan waktu operasi, harga dan ketersediaan.",
      mapsButton: "Buka Google Maps",
      phoneButton: "Telefon Kedai",
      mapAria: "Ilustrasi lokasi; gunakan butang Google Maps untuk arah sebenar",
      footer1: "© 2026 · Konsep demo portfolio. Bukan laman web rasmi Jong Barbershop dan tidak disahkan oleh pemilik.",
      footer2: "Gambar ialah bahan rujukan/inspirasi. Maklumat perniagaan daripada direktori awam dan perlu disahkan sebelum diterbitkan sebagai laman rasmi.",
      whatsAppQuestion: "Hai Jong Barbershop, saya nak tanya tentang potong rambut.",
      whatsAppDetails: "Hai Jong Barbershop, saya nak tanya harga dan waktu operasi.",
      menuOpen: "Buka menu",
      menuClose: "Tutup menu",
      switchAria: "Bahasa laman web",
      announce: "Bahasa Melayu dipilih"
    },
    en: {
      demo: "Portfolio demo concept · Not the official Jong Barbershop website",
      navLabel: "Main navigation",
      topLabel: "Jong Barbershop - back to top",
      navGaya: "Hair Inspiration",
      navAbout: "About",
      navServices: "Haircuts",
      navLocation: "Location",
      waQuestion: "Ask on WhatsApp",
      heroTitle: "FRESH<br><em>CUTS.</em><br>YOUR<br>STYLE.",
      heroSub: "Your next haircut starts with your style. Find inspiration and visit Jong Barbershop in Taman Puchong Prima.",
      heroImageAlt: "Illustrative image of a barbershop, not Jong Barbershop's actual premises",
      lookButton: "Explore Styles",
      tickerStyle: "YOUR STYLE",
      galleryEyebrow: "01 / Style Inspiration",
      galleryTitle: "FIND YOUR<br>LOOK<span style=\"color:var(--copper)\">.</span>",
      galleryLead: "Not sure what haircut to get? Save an inspiration photo and show it to your barber to discuss the style you like.",
      shortCut: "Short Cut",
      cleanLook: "Clean Look",
      modernStyle: "Modern Style",
      classicCut: "Classic Cut",
      photoShortAlt: "Inspiration photo of a short men's haircut",
      photoCleanAlt: "Inspiration photo of a clean haircut",
      photoModernAlt: "Inspiration photo of a modern men's haircut",
      photoClassicAlt: "Inspiration photo of a classic haircut",
      galleryNote: "* All images are general reference/inspiration photos, not actual work or photos of Jong Barbershop. Please confirm available styles with the shop.",
      aboutPhotoAlt: "Illustrative photo of a barbershop",
      photoNote: "Illustration Only",
      aboutEyebrow: "Your Look, Your Choice",
      aboutTitle: "YOUR LOOK.<br><span style=\"color:var(--copper)\">YOUR WAY.</span>",
      aboutLead: "From a simple trim to a fresh new look, it all starts with what you want. Bring a reference photo and discuss your preferred style before your haircut.",
      findPuchong: "Find Us in Puchong",
      servicesEyebrow: "03 / Before You Visit",
      servicesTitle: "BEFORE<br>YOU GO<span style=\"color:var(--copper)\">.</span>",
      servicesLead: "The basics to help plan your visit. Please confirm haircut options, prices and opening hours directly with the shop.",
      service1: "Haircuts",
      service1Lead: "Contact the shop to ask which types of haircuts are currently offered.",
      service2: "Style Reference",
      service2Lead: "Bring a photo of a look you like and check with your barber before starting.",
      service3: "Check First",
      service3Lead: "Ask about current prices, opening hours and whether appointments are needed.",
      contactEyebrow: "Have a question?",
      contactTitle: "NEED A<br>HAIRCUT?",
      contactButton: "Contact the Shop",
      locationEyebrow: "04 / Find Us",
      locationTitle: "FIND<br><span style=\"color:var(--copper)\">US.</span>",
      addressLabel: "SHOP ADDRESS",
      locationNote: "Contact the shop first to confirm opening hours, prices and availability.",
      mapsButton: "Open Google Maps",
      phoneButton: "Call the Shop",
      mapAria: "Illustrated map panel; use the Google Maps button for actual directions",
      footer1: "© 2026 · Portfolio concept demo. Not the official Jong Barbershop website and not approved by its owner.",
      footer2: "Images are illustrative reference photos. Business details come from public listings and must be confirmed before use on an official website.",
      whatsAppQuestion: "Hi Jong Barbershop, I'd like to ask about a haircut.",
      whatsAppDetails: "Hi Jong Barbershop, I'd like to ask about prices and opening hours.",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      switchAria: "Website language",
      announce: "English selected"
    }
  };

  // Identify translatable elements without hard-coding text or duplicating markup.
  const bindings = [
    [".demo-strip", "demo"],
    [".site-header nav", "navLabel", "aria-label"],
    [".site-header .brand", "topLabel", "aria-label"],
    ['.nav-links a[href="#gaya"]', "navGaya"],
    ['.nav-links a[href="#tentang"]', "navAbout"],
    ['.nav-links a[href="#perkhidmatan"]', "navServices"],
    ['.nav-links a[href="#lokasi"]', "navLocation"],
    [".hero h1", "heroTitle", "html"],
    [".hero-sub", "heroSub"],
    [".hero-image", "heroImageAlt", "alt"],
    [".ticker-inner span:nth-of-type(2)", "tickerStyle"],
    [".styles .section-head .eyebrow", "galleryEyebrow"],
    [".styles .section-head .section-title", "galleryTitle", "html"],
    [".styles .section-head p", "galleryLead"],
    [".style-card:nth-child(1) h3", "shortCut"],
    [".style-card:nth-child(2) h3", "cleanLook"],
    [".style-card:nth-child(3) h3", "modernStyle"],
    [".style-card:nth-child(4) h3", "classicCut"],
    [".style-card:nth-child(1) img", "photoShortAlt", "alt"],
    [".style-card:nth-child(2) img", "photoCleanAlt", "alt"],
    [".style-card:nth-child(3) img", "photoModernAlt", "alt"],
    [".style-card:nth-child(4) img", "photoClassicAlt", "alt"],
    [".styles .disclaimer", "galleryNote"],
    [".about-visual img", "aboutPhotoAlt", "alt"],
    [".about-visual .photo-note", "photoNote"],
    [".about-text .eyebrow", "aboutEyebrow"],
    [".about-text h2", "aboutTitle", "html"],
    [".about-text p", "aboutLead"],
    [".services .section-head .eyebrow", "servicesEyebrow"],
    [".services .section-head .section-title", "servicesTitle", "html"],
    [".services .section-head p", "servicesLead"],
    [".service-row:nth-child(1) h3", "service1"],
    [".service-row:nth-child(1) p", "service1Lead"],
    [".service-row:nth-child(2) h3", "service2"],
    [".service-row:nth-child(2) p", "service2Lead"],
    [".service-row:nth-child(3) h3", "service3"],
    [".service-row:nth-child(3) p", "service3Lead"],
    [".contact-band .eyebrow", "contactEyebrow"],
    [".contact-band h2", "contactTitle", "html"],
    [".location .eyebrow", "locationEyebrow"],
    [".location .section-title", "locationTitle", "html"],
    [".location .address-label", "addressLabel"],
    [".location .location-note", "locationNote"],
    [".map-panel", "mapAria", "aria-label"],
    [".footer-inner > div > p:first-child", "footer1"],
    [".footer-inner > div > p:last-child", "footer2"]
  ];
  bindings.forEach(([selector, key, mode]) => {
    const node = document.querySelector(selector);
    if (!node) return;
    if (mode === "html") node.dataset.i18nHtml = key;
    else if (mode === "alt") node.dataset.i18nAlt = key;
    else if (mode === "aria-label") node.dataset.i18nAriaLabel = key;
    else node.dataset.i18n = key;
  });

  function bindButtonText(selector, key) {
    const button = document.querySelector(selector);
    if (!button) return;
    const text = [...button.childNodes].find(node => node.nodeType === 3 && node.textContent.trim());
    if (!text) return;
    const label = document.createElement("span");
    label.dataset.i18n = key;
    label.textContent = text.textContent.trim();
    button.replaceChild(label, text);
  }
  [
    [".site-header a.btn-primary", "waQuestion"],
    [".hero .button-row a.btn-primary", "waQuestion"],
    [".hero .button-row a.btn-outline", "lookButton"],
    [".about-text a.btn-outline", "findPuchong"],
    [".contact-band a.btn", "contactButton"],
    [".location .button-row a.btn-primary", "mapsButton"],
    [".location .button-row a.btn-outline", "phoneButton"]
  ].forEach(([selector, key]) => bindButtonText(selector, key));

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.dataset.whatsapp = link.closest(".contact-band") ? "details" : "question";
  });

  const buttons = [...document.querySelectorAll(".lang-button")];
  const navLinks = document.getElementById("navLinks");
  const menuButton = document.getElementById("menuButton");
  const languageAnnounce = document.getElementById("languageAnnounce");
  const switchControl = document.querySelector(".language-switch");
  const description = document.querySelector('meta[name="description"]');
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let language = "bm";
  let fadeTimeout = null;
  try {
    if (window.localStorage.getItem("jong-demo-language") === "en") language = "en";
  } catch (_) {
    /* Local files or private browsing may block storage. Default to BM. */
  }

  function updateMenuLabel() {
    if (!menuButton) return;
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-label", words[language][open ? "menuClose" : "menuOpen"]);
  }

  function applyLanguage(next, announce) {
    if (!Object.prototype.hasOwnProperty.call(words, next)) return;
    language = next;
    const t = words[next];
    document.documentElement.lang = next === "en" ? "en" : "ms";
    document.title = next === "en"
      ? "Jong Barbershop Puchong — Website Concept"
      : "Jong Barbershop Puchong — Konsep Laman Web";

    if (description) description.content = next === "en"
      ? "Unofficial website concept for Jong Barbershop Puchong. Hair inspiration, location and WhatsApp enquiry."
      : "Konsep laman web untuk Jong Barbershop Puchong. Lihat inspirasi gaya rambut, lokasi kedai dan hubungi melalui WhatsApp.";

    document.querySelectorAll("[data-i18n]").forEach(node => {
      const val = t[node.dataset.i18n];
      if (val !== undefined) node.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(node => {
      const val = t[node.dataset.i18nHtml];
      if (val !== undefined) node.innerHTML = val; // Trusted static translations only.
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(node => {
      const val = t[node.dataset.i18nAlt];
      if (val !== undefined) node.alt = val;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(node => {
      const val = t[node.dataset.i18nAriaLabel];
      if (val !== undefined) node.setAttribute("aria-label", val);
    });

    document.querySelectorAll("a[data-whatsapp]").forEach(link => {
      const message = link.dataset.whatsapp === "details" ? t.whatsAppDetails : t.whatsAppQuestion;
      link.href = "https://wa.me/60189854070?text=" + encodeURIComponent(message);
    });
    buttons.forEach(button => {
      const active = button.dataset.lang === next;
      button.setAttribute("aria-pressed", String(active));
    });
    if (switchControl) switchControl.setAttribute("aria-label", t.switchAria);
    updateMenuLabel();
    if (announce && languageAnnounce) languageAnnounce.textContent = t.announce;
    try {
      window.localStorage.setItem("jong-demo-language", next);
    } catch (_) {
      /* Remembering the language is optional. */
    }
  }

  buttons.forEach(button => button.addEventListener("click", () => {
    const next = button.dataset.lang;
    if (next === language) return;
    window.clearTimeout(fadeTimeout);
    if (reducedMotion.matches) {
      document.documentElement.classList.remove("language-changing");
      applyLanguage(next, true);
    } else {
      document.documentElement.classList.add("language-changing");
      fadeTimeout = window.setTimeout(() => {
        applyLanguage(next, true);
        document.documentElement.classList.remove("language-changing");
      }, 115);
    }
  }));

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const next = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(next));
      menuButton.textContent = next ? "×" : "☰";
      navLinks.classList.toggle("open", next);
      updateMenuLabel();
    });
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
      updateMenuLabel();
    }));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        menuButton.click();
        menuButton.focus();
      }
    });
  }

  applyLanguage(language, false);

  function enableScrollMotion() {
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
    const targets = [...document.querySelectorAll(
      ".section-head, .style-card, .about-visual, .about-text, .service-row, .contact-grid, .location-grid > div, .map-panel"
    )];
    if (!targets.length) return;
    targets.forEach((node, index) => {
      node.classList.add("reveal");
      if (node.classList.contains("style-card")) {
        node.style.setProperty("--reveal-delay", ((index % 4) * 75) + "ms");
      }
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.09, rootMargin: "0px 0px -18px 0px" });
    document.documentElement.classList.add("js-motion");
    targets.forEach(node => observer.observe(node));
  }

  enableScrollMotion();
  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", event => {
      if (event.matches) document.documentElement.classList.remove("js-motion");
    });
  }
})();

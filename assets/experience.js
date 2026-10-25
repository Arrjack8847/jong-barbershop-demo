/* Jong Barbershop — bilingual, accessible, static-site interactions.
   WhatsApp and map destination confirmed by the user. This remains an unofficial portfolio concept. */
(() => {
  "use strict";

  // One source of truth. Add owner-confirmed values only after authorization.
  const CONTACT = Object.freeze({
    whatsapp: "60189854070",
    directions: "https://www.google.com/maps/place/Jong+Barbershop+Puchong/@3.0002583,101.5947656,15z/data=!4m15!1m8!3m7!1s0x31cdb366edb04e3d:0xb997924c7971b6aa!2sJong+Barbershop+Puchong!8m2!3d3.0002583!4d101.5947656!10e5!16s%2Fg%2F11h5rxt5z_!3m5!1s0x31cdb366edb04e3d:0xb997924c7971b6aa!8m2!3d3.0002583!4d101.5947656!16s%2Fg%2F11h5rxt5z_?entry=ttu"
  });

  const translations = {
    bm: {
      demo: "Konsep demo untuk portfolio · Bukan laman rasmi Jong Barbershop",
      backTop: "Jong Barbershop — ke utama",
      navLabel: "Navigasi utama", mobileNavLabel: "Navigasi telefon", menuDialog: "Menu navigasi",
      langLabel: "Bahasa laman web", menuOpen: "Buka menu", menuClose: "Tutup menu", menuButton: "Menu",
      navHome: "Utama", navGallery: "Hasil Potongan", navAbout: "Tentang Jong", navContact: "Lokasi",
      menuCaption: "Jong Barbershop · Konsep portfolio",
      heroEyebrow: "JONG BARBERSHOP / KONSEP PORTFOLIO",
      heroTitle: '<span class="hero-line">POTONGAN</span><span class="hero-line accent">KEMAS.</span><span class="hero-line">GAYA PADU.</span>',
      heroCopy: "Lihat potongan dan suasana Jong Barbershop dalam konsep portfolio sinematik ini.",
      heroContact: "DAPATKAN ARAH", heroShowcase: "Lihat Potongan",
      contactUnverified: "Demo sahaja · Lokasi dan hubungan belum disahkan",
      photoLabel: "FOTO JONG · KONSEP DEMO", scrollGallery: "Skrol ke galeri", scrollLabel: "TEROKAI",
      galleryEyebrow: "02 / HASIL POTONGAN",
      galleryTitle: "HASIL<br><em>POTONGAN.</em>",
      galleryCopy: "Pilihan foto potongan Jong yang dikongsi untuk konsep portfolio ini.",
      galleryHint: "LERET UNTUK LIHAT LAGI", galleryAria: "Galeri foto potongan Jong",
      galleryPrev: "Gambar sebelumnya", galleryNext: "Gambar seterusnya",
      galleryCard1: "FOTO 01", galleryCard2: "FOTO 02", galleryCard3: "FOTO 03", galleryCard4: "FOTO 04",
      imageMark: "FOTO JONG / DEMO",
      altGallery1: "Foto potongan rambut Jong 1",
      altGallery2: "Foto potongan rambut Jong 2",
      altGallery3: "Foto potongan rambut Jong 3",
      altGallery4: "Foto potongan rambut Jong 4",
      galleryDisclosure: "* Foto daripada bahan yang dikongsi untuk konsep demo. Penerbitan rasmi memerlukan kelulusan pemilik dan kebenaran penggunaan imej.",
      experienceEyebrow: "03 / SUASANA JONG",
      experienceTitle: 'KENALI JONG<br><em>BARBERSHOP.</em>',
      experienceSubhead: "SATU KEDAI.<br>PELBAGAI GAYA.",
      experienceCopy: "Lihat suasana Jong Barbershop melalui foto kedai dan barber yang dikongsi untuk konsep demo ini.",
      experienceCaption: "Suasana kedai Jong dan identiti dinding merahnya.",
      experienceMainAlt: "Foto suasana Jong Barbershop",
      experienceSmallAlt: "Foto dalaman Jong Barbershop",
      photoShort: "FOTO JONG",
      closingEyebrow: "04 / WALK-IN",
      closingTitle: "NAK GAYA BARU?<br><em>SINGGAH JONG.</em>",
      closingCopy: "Walk-in dialu-alukan. Cari Jong di Taman Puchong Prima atau hubungi melalui WhatsApp untuk pertanyaan.",
      closingButton: "DAPATKAN ARAH", demoTag: "DEMO",
      contactStateTitle: "Lokasi belum disahkan",
      contactStateCopy: "Butang ini ialah demo sahaja. Pautan arah dan nombor telefon akan diaktifkan setelah disahkan oleh pemilik.",
      footerNotice: "Konsep portfolio tidak rasmi, bukan laman web yang dikendalikan oleh Jong Barbershop.",
      galleryCard5: "FOTO 05",
      galleryCard6: "FOTO 06",
      altGallery5: "Foto potongan rambut Jong 5",
      altGallery6: "Foto potongan rambut Jong 6",
      floatingLabel: "DAPATKAN ARAH",
      floatingAria: "Dapatkan arah ke Jong Barbershop melalui Google Maps",
      viewerLabel: "Lihat foto potongan Jong",
      viewerClose: "Tutup gambar",
      openGallery1: "Besarkan foto potongan 1",
      openGallery2: "Besarkan foto potongan 2",
      openGallery3: "Besarkan foto potongan 3",
      openGallery4: "Besarkan foto potongan 4",
      openGallery5: "Besarkan foto potongan 5",
      openGallery6: "Besarkan foto potongan 6",
      whatsappTextLink: "Tanya melalui WhatsApp ↗",
      whatsappButton: "WHATSAPP JONG",
      whatsappLabel: "WhatsApp Jong:",
      whatsappMessage: "Hai Jong Barbershop, saya nak tanya tentang potong rambut.",
      backTopLink: "KE ATAS", languageAnnouncement: "Bahasa Melayu dipilih",
      title: "Jong Barbershop — Konsep Portfolio",
      description: "Konsep portfolio tidak rasmi Jong Barbershop: hasil potongan, suasana kedai, WhatsApp dan lokasi.",
      openGraphDescription: "Konsep portfolio Jong Barbershop menggunakan foto yang dibekalkan, serta pautan WhatsApp dan Google Maps."
    },
    en: {
      demo: "Portfolio demo concept · Not the official Jong Barbershop website",
      backTop: "Jong Barbershop — back to top",
      navLabel: "Main navigation", mobileNavLabel: "Mobile navigation", menuDialog: "Navigation menu",
      langLabel: "Website language", menuOpen: "Open menu", menuClose: "Close menu", menuButton: "Menu",
      navHome: "Home", navGallery: "Haircut Gallery", navAbout: "About Jong", navContact: "Location",
      menuCaption: "Jong Barbershop · Portfolio concept",
      heroEyebrow: "JONG BARBERSHOP / PORTFOLIO CONCEPT",
      heroTitle: '<span class="hero-line">SHARP CUTS.</span><span class="hero-line accent">FRESH STYLE.</span>',
      heroCopy: "Explore Jong Barbershop's haircuts and atmosphere in this cinematic portfolio concept.",
      heroContact: "GET DIRECTIONS", heroShowcase: "View Haircuts",
      contactUnverified: "Demo only · Location and contact details are unverified",
      photoLabel: "JONG PHOTO · DEMO CONCEPT", scrollGallery: "Scroll to gallery", scrollLabel: "EXPLORE",
      galleryEyebrow: "02 / HAIRCUT GALLERY",
      galleryTitle: "HAIRCUT<br><em>GALLERY.</em>",
      galleryCopy: "A selection of Jong haircut photographs shared for this portfolio concept.",
      galleryHint: "SWIPE TO EXPLORE", galleryAria: "Jong haircut photo gallery",
      galleryPrev: "Previous image", galleryNext: "Next image",
      galleryCard1: "PHOTO 01", galleryCard2: "PHOTO 02", galleryCard3: "PHOTO 03", galleryCard4: "PHOTO 04",
      imageMark: "JONG PHOTO / DEMO",
      altGallery1: "Jong haircut photo 1",
      altGallery2: "Jong haircut photo 2",
      altGallery3: "Jong haircut photo 3",
      altGallery4: "Jong haircut photo 4",
      galleryDisclosure: "* Photos are supplied for this demo concept. Official publication requires owner approval and appropriate image-use permission.",
      experienceEyebrow: "03 / INSIDE JONG",
      experienceTitle: 'GET TO KNOW<br><em>JONG BARBERSHOP.</em>',
      experienceSubhead: "ONE SHOP.<br>MANY LOOKS.",
      experienceCopy: "A look at Jong Barbershop through shop and barber photos shared for this concept.",
      experienceCaption: "Jong's shop atmosphere and distinctive red interior.",
      experienceMainAlt: "Photo from Jong Barbershop",
      experienceSmallAlt: "Jong Barbershop interior photo",
      photoShort: "JONG PHOTO",
      closingEyebrow: "04 / WALK-IN",
      closingTitle: "READY FOR A NEW LOOK?<br><em>VISIT JONG.</em>",
      closingCopy: "Walk-ins are welcome. Find Jong in Taman Puchong Prima or contact the shop on WhatsApp with enquiries.",
      closingButton: "GET DIRECTIONS", demoTag: "DEMO",
      contactStateTitle: "Location not yet verified",
      contactStateCopy: "This is a demo button. Directions and phone links will be activated only after owner confirmation.",
      footerNotice: "Unofficial portfolio concept; not a website operated by Jong Barbershop.",
      galleryCard5: "PHOTO 05",
      galleryCard6: "PHOTO 06",
      altGallery5: "Jong haircut photo 5",
      altGallery6: "Jong haircut photo 6",
      floatingLabel: "GET DIRECTIONS",
      floatingAria: "Get directions to Jong Barbershop on Google Maps",
      viewerLabel: "View Jong haircut photos",
      viewerClose: "Close photo",
      openGallery1: "Enlarge haircut photo 1",
      openGallery2: "Enlarge haircut photo 2",
      openGallery3: "Enlarge haircut photo 3",
      openGallery4: "Enlarge haircut photo 4",
      openGallery5: "Enlarge haircut photo 5",
      openGallery6: "Enlarge haircut photo 6",
      whatsappTextLink: "Ask on WhatsApp ↗",
      whatsappButton: "WHATSAPP JONG",
      whatsappLabel: "Jong WhatsApp:",
      whatsappMessage: "Hi Jong Barbershop, I'd like to ask about a haircut.",
      backTopLink: "BACK TO TOP", languageAnnouncement: "English selected",
      title: "Jong Barbershop — Portfolio Concept",
      description: "Unofficial Jong Barbershop portfolio concept showcasing haircut photos, the shop, WhatsApp and location.",
      openGraphDescription: "Jong Barbershop portfolio concept with supplied photos, WhatsApp and Google Maps links."
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
    const whatsappHref = "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(t.whatsappMessage);
    document.querySelectorAll("[data-whatsapp-link]").forEach(link => {
      link.href = whatsappHref;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
    document.querySelectorAll("[data-directions-link]").forEach(link => {
      link.href = CONTACT.directions;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
    if (status && announce) status.textContent = t.languageAnnouncement;
    if (document.getElementById("photoDialog")?.open) updateViewer(viewerIndex);
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
    mobileMenu.querySelector(".menu-backdrop")?.addEventListener("click", () => closeMenu());
    menuLinks.forEach(link => link.addEventListener("click", () => closeMenu(true)));
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


  // Actual gallery images open in an accessible native dialog. No synthesized before/after images.
  const photoDialog = document.getElementById("photoDialog");
  const viewerImage = document.getElementById("viewerImage");
  const viewerCaption = document.getElementById("viewerCaption");
  const viewerCount = document.getElementById("viewerCount");
  const viewerClose = document.getElementById("viewerClose");
  const floatingDirections = document.getElementById("floatingDirections");
  const closingSection = document.getElementById("hubungi");
  const heroActions = document.querySelector(".hero-actions");
  let viewerIndex = 0;
  let lastGalleryTrigger = null;
  let floatFrame = 0;

  function updateViewer(index) {
    if (!galleryCards.length || !viewerImage || !viewerCaption || !viewerCount) return;
    viewerIndex = (index + galleryCards.length) % galleryCards.length;
    const image = galleryCards[viewerIndex].querySelector("img");
    if (!image) return;
    viewerImage.src = image.currentSrc || image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = translations[language]["galleryCard" + (viewerIndex + 1)] || "";
    viewerCount.textContent = String(viewerIndex+1).padStart(2,"0") + " / " + String(galleryCards.length).padStart(2,"0");
  }
  document.querySelectorAll("[data-gallery-open]").forEach(trigger => {
    trigger.addEventListener("click", () => {
      if (!photoDialog || typeof photoDialog.showModal !== "function") return;
      lastGalleryTrigger = trigger;
      updateViewer(Number(trigger.dataset.galleryOpen));
      photoDialog.showModal();
      document.body.classList.add("viewer-open");
      viewerClose?.focus();
      scheduleFloating();
    });
  });
  viewerClose?.addEventListener("click", () => photoDialog?.close());
  document.getElementById("viewerPrev")?.addEventListener("click", () => updateViewer(viewerIndex - 1));
  document.getElementById("viewerNext")?.addEventListener("click", () => updateViewer(viewerIndex + 1));
  photoDialog?.addEventListener("keydown", e => {
    if (e.key==="ArrowLeft" || e.key==="ArrowRight") {
      e.preventDefault(); updateViewer(viewerIndex + (e.key==="ArrowRight" ? 1 : -1));
    }
  });
  photoDialog?.addEventListener("click", e => { if (e.target === photoDialog) photoDialog.close(); });
  photoDialog?.addEventListener("close", () => {
    document.body.classList.remove("viewer-open");
    lastGalleryTrigger?.focus();
    scheduleFloating();
  });

  // Sticky demo directions appears only after the main hero CTA and before final CTA.
  function updateFloating() {
    if (!floatingDirections || !heroActions || !closingSection) return;
    const afterHero = heroActions.getBoundingClientRect().bottom < 0;
    const finalReached = closingSection.getBoundingClientRect().top < window.innerHeight * .83;
    const show = window.innerWidth < 768 && afterHero && !finalReached && !menuOpen && !(photoDialog && photoDialog.open);
    floatingDirections.classList.toggle("is-visible", show);
    floatingDirections.setAttribute("aria-hidden", String(!show));
    floatingDirections.tabIndex = show ? 0 : -1;
  }
  function scheduleFloating() {
    if (floatFrame) return;
    floatFrame = window.requestAnimationFrame(() => {floatFrame = 0; updateFloating();});
  }
  window.addEventListener("scroll", scheduleFloating, {passive:true});
  window.addEventListener("resize", scheduleFloating, {passive:true});
  // Directions CTA now opens the user-provided, verified Google Maps place link.
  scheduleFloating();

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

  translate(language);
})();

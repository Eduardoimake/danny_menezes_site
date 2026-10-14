const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const pointerFineQuery = window.matchMedia("(pointer: fine)");

let prefersReducedMotion = motionQuery.matches;
let supportsFinePointer = pointerFineQuery.matches;

const preloader = document.getElementById("preloader");
const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = mainNav ? mainNav.querySelectorAll("a") : [];
const year = document.getElementById("currentYear");
const cursorGlow = document.getElementById("cursorGlow");
const heroVisual = document.getElementById("heroVisual");
const heroSection = document.getElementById("inicio");
const revealElements = document.querySelectorAll(".reveal");

let menuIsOpen = false;
let scrollFrame = null;
let pointerFrame = null;
let pendingPointerPosition = null;

function setCurrentYear() {
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function hidePreloader() {
  if (!preloader || preloader.classList.contains("is-hidden")) {
    return;
  }

  preloader.classList.add("is-hidden");

  window.setTimeout(() => {
    preloader.setAttribute("hidden", "");
  }, prefersReducedMotion ? 1 : 700);
}

function updateHeaderAndProgress() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (header) {
    header.classList.toggle("is-scrolled", scrollTop > 18);
  }

  if (progress) {
    progress.style.transform = `scaleX(${Math.min(Math.max(progressValue, 0), 100) / 100})`;
  }

  scrollFrame = null;
}

function requestScrollUpdate() {
  if (scrollFrame !== null) {
    return;
  }

  scrollFrame = window.requestAnimationFrame(updateHeaderAndProgress);
}

function setMenuState(open) {
  if (!menuToggle || !mainNav) {
    return;
  }

  menuIsOpen = open;

  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.classList.toggle("is-active", open);
  mainNav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

function toggleMenu() {
  setMenuState(!menuIsOpen);
}

function closeMenu() {
  setMenuState(false);
}

function setupMenu() {
  if (!menuToggle || !mainNav) {
    return;
  }

  menuToggle.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuIsOpen) {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 860 && menuIsOpen) {
        closeMenu();
      }
    },
    { passive: true }
  );
}

function revealImmediately() {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

function setupReveal() {
  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealImmediately();
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function resetHeroParallax() {
  if (!heroVisual) {
    return;
  }

  heroVisual.style.removeProperty("--parallax-x");
  heroVisual.style.removeProperty("--parallax-y");
}

function updateHeroParallax() {
  if (
    !heroVisual ||
    !pendingPointerPosition ||
    prefersReducedMotion ||
    !supportsFinePointer
  ) {
    pointerFrame = null;
    return;
  }

  const bounds = heroVisual.getBoundingClientRect();

  if (!bounds.width || !bounds.height) {
    pointerFrame = null;
    return;
  }

  const x = (pendingPointerPosition.x - (bounds.left + bounds.width / 2)) / bounds.width;
  const y = (pendingPointerPosition.y - (bounds.top + bounds.height / 2)) / bounds.height;

  const limitedX = Math.max(-1, Math.min(1, x));
  const limitedY = Math.max(-1, Math.min(1, y));

  heroVisual.style.setProperty("--parallax-x", `${limitedX * 4}px`);
  heroVisual.style.setProperty("--parallax-y", `${limitedY * 4}px`);

  pointerFrame = null;
}

function requestHeroParallax(event) {
  if (
    !heroVisual ||
    prefersReducedMotion ||
    !supportsFinePointer ||
    (heroSection && !heroSection.contains(event.target))
  ) {
    return;
  }

  pendingPointerPosition = {
    x: event.clientX,
    y: event.clientY
  };

  if (pointerFrame === null) {
    pointerFrame = window.requestAnimationFrame(updateHeroParallax);
  }
}

function setupHeroParallax() {
  if (!heroVisual || prefersReducedMotion || !supportsFinePointer) {
    resetHeroParallax();
    return;
  }

  window.addEventListener("pointermove", requestHeroParallax, {
    passive: true
  });

  if (heroSection) {
    heroSection.addEventListener(
      "pointerleave",
      () => {
        pendingPointerPosition = null;
        resetHeroParallax();
      },
      { passive: true }
    );
  }
}

function updateCursorGlow(event) {
  if (!cursorGlow || prefersReducedMotion || !supportsFinePointer) {
    return;
  }

  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
  cursorGlow.classList.add("is-active");
}

function setupCursorGlow() {
  if (!cursorGlow || prefersReducedMotion || !supportsFinePointer) {
    return;
  }

  window.addEventListener("pointermove", updateCursorGlow, {
    passive: true
  });

  document.addEventListener("mouseleave", () => {
    cursorGlow.classList.remove("is-active");
  });

  window.addEventListener(
    "blur",
    () => {
      cursorGlow.classList.remove("is-active");
    },
    { passive: true }
  );
}

function setupMotionPreferenceListener() {
  const handleMotionChange = (event) => {
    prefersReducedMotion = event.matches;

    if (prefersReducedMotion) {
      resetHeroParallax();
      revealImmediately();

      if (cursorGlow) {
        cursorGlow.classList.remove("is-active");
      }
    }
  };

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", handleMotionChange);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(handleMotionChange);
  }

  const handlePointerChange = (event) => {
    supportsFinePointer = event.matches;

    if (!supportsFinePointer) {
      resetHeroParallax();

      if (cursorGlow) {
        cursorGlow.classList.remove("is-active");
      }
    }
  };

  if (typeof pointerFineQuery.addEventListener === "function") {
    pointerFineQuery.addEventListener("change", handlePointerChange);
  } else if (typeof pointerFineQuery.addListener === "function") {
    pointerFineQuery.addListener(handlePointerChange);
  }
}

function init() {
  setCurrentYear();
  setupMenu();
  setupReveal();
  setupHeroParallax();
  setupCursorGlow();
  setupMotionPreferenceListener();

  updateHeaderAndProgress();
  window.addEventListener("scroll", requestScrollUpdate, {
    passive: true
  });
  window.addEventListener("resize", requestScrollUpdate, {
    passive: true
  });

  if (document.readyState === "complete") {
    window.setTimeout(hidePreloader, prefersReducedMotion ? 0 : 450);
  } else {
    window.addEventListener(
      "load",
      () => {
        window.setTimeout(hidePreloader, prefersReducedMotion ? 0 : 450);
      },
      { once: true }
    );

    window.setTimeout(hidePreloader, prefersReducedMotion ? 0 : 1800);
  }
}

init();
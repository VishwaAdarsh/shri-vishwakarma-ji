/**
 * ====================================================================
 * 🕉️ VISHWAKARMA — THE DIVINE ARCHITECT
 * Animation Controller Module (Phase 1 Divine Entry & Atmosphere)
 * ====================================================================
 */

export const AnimationController = {
  isReducedMotion: false,
  observer: null,
  heroSection: null,
  parallaxElements: {
    artwork: null,
    glow: null,
    silhouette: null
  },
  mouseTarget: { x: 0, y: 0 },
  mouseCurrent: { x: 0, y: 0 },
  rafId: null,

  init() {
    this.checkReducedMotion();
    this.initParticles();
    this.initHeroInteractions();

    if (this.isReducedMotion) {
      this.bypassLoadingScreen();
      this.showAllContentImmediately();
      return;
    }

    this.runSacredLoadingSequence(() => {
      this.triggerHeroEntrance();
      this.initParallax();
      this.initScrollReveals();
    });
  },

  checkReducedMotion() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.isReducedMotion = mediaQuery.matches;

    mediaQuery.addEventListener('change', () => {
      this.isReducedMotion = mediaQuery.matches;
      if (this.isReducedMotion) {
        this.disableAllMotion();
      }
    });
  },

  /* ------------------------------------------------------------------
   * 1. SACRED LOADING SCREEN SEQUENCE (FAST & INTERRUPTIBLE)
   * ॐ -> विश्वकर्मा -> THE DIVINE ARCHITECT -> Elegant Fast Dissolve
   * ------------------------------------------------------------------ */
  runSacredLoadingSequence(onComplete) {
    const loadingScreen = document.getElementById('loading-screen');
    const omEl = document.getElementById('loader-om');
    const hindiEl = document.getElementById('loader-hindi');
    const dividerEl = document.getElementById('loader-divider');
    const enEl = document.getElementById('loader-en');

    if (!loadingScreen) {
      if (onComplete) onComplete();
      return;
    }

    let isFinished = false;
    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      loadingScreen.classList.add('is-loaded');
      setTimeout(() => {
        if (loadingScreen.parentNode) loadingScreen.remove();
        if (onComplete) onComplete();
      }, 350);
    };

    // User can instantly dismiss or skip loading by scrolling, touching, or clicking
    window.addEventListener('wheel', finish, { once: true, passive: true });
    window.addEventListener('touchstart', finish, { once: true, passive: true });
    window.addEventListener('keydown', finish, { once: true, passive: true });
    loadingScreen.addEventListener('click', finish, { once: true, passive: true });

    // Step 1: Om appears
    setTimeout(() => { if (omEl && !isFinished) omEl.classList.add('show'); }, 100);

    // Step 2: Vishwakarma Devanagari appears
    setTimeout(() => { if (hindiEl && !isFinished) hindiEl.classList.add('show'); }, 350);

    // Step 3: English subtitle and subtle gold keyline appear
    setTimeout(() => {
      if (dividerEl && !isFinished) dividerEl.classList.add('show');
      if (enEl && !isFinished) enEl.classList.add('show');
    }, 600);

    // Step 4: Loading screen dissolves smoothly
    setTimeout(() => {
      finish();
    }, 1100);
  },

  bypassLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('is-loaded');
      loadingScreen.style.display = 'none';
    }
  },

  showAllContentImmediately() {
    document.querySelectorAll('.hero-fade-in, .hero-scale-in, .reveal-fade, .reveal-scale').forEach(el => {
      el.classList.add('is-visible');
    });
  },

  disableAllMotion() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.showAllContentImmediately();
  },

  /* ------------------------------------------------------------------
   * 2. HERO CINEMATIC ENTRANCE
   * Staggered arrival of layers, artwork, titles, CTA, and scroll indicator
   * ------------------------------------------------------------------ */
  triggerHeroEntrance() {
    const heroElements = document.querySelectorAll(
      '.hero-fade-in, .hero-scale-in'
    );

    // If GSAP is present, choreograph cinematic smooth easing
    if (typeof window.gsap !== 'undefined' && !this.isReducedMotion) {
      try {
        const tl = window.gsap.timeline();
        
        tl.to('.hero-scale-in', {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power2.out'
        })
        .to('.hero-fade-in', {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.16,
          ease: 'power2.out'
        }, '-=0.8');

        return;
      } catch (err) {
        console.warn('GSAP hero timeline fallback to CSS transitions:', err);
      }
    }

    // CSS fallback: activate classes sequentially
    heroElements.forEach(el => {
      el.classList.add('is-visible');
    });
  },

  /* ------------------------------------------------------------------
   * 3. SUBTLE DESKTOP PARALLAX
   * Shifts artwork, glow, and silhouette based on mouse position
   * ------------------------------------------------------------------ */
  initParallax() {
    // Only enable on desktop screens without touch
    if (window.innerWidth < 1024 || ('ontouchstart' in window) || this.isReducedMotion) {
      return;
    }

    this.heroSection = document.getElementById('hero');
    if (!this.heroSection) return;

    this.parallaxElements.artwork = document.getElementById('hero-artwork-wrap');
    this.parallaxElements.glow = document.querySelector('.hero-celestial-glow');
    this.parallaxElements.silhouette = document.querySelector('.hero-temple-silhouette');

    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      this.mouseTarget.x = (e.clientX - centerX) / centerX;
      this.mouseTarget.y = (e.clientY - centerY) / centerY;
    }, { passive: true });

    // Smooth lerp animation loop
    const animate = () => {
      // Lerp current towards target
      this.mouseCurrent.x += (this.mouseTarget.x - this.mouseCurrent.x) * 0.05;
      this.mouseCurrent.y += (this.mouseTarget.y - this.mouseCurrent.y) * 0.05;

      const x = this.mouseCurrent.x;
      const y = this.mouseCurrent.y;

      if (this.parallaxElements.artwork) {
        this.parallaxElements.artwork.style.transform = `translate3d(${x * 6}px, ${y * 4}px, 0)`;
      }

      if (this.parallaxElements.glow) {
        this.parallaxElements.glow.style.transform = `translate(calc(-50% + ${x * 16}px), calc(-50% + ${y * 12}px))`;
      }

      if (this.parallaxElements.silhouette) {
        this.parallaxElements.silhouette.style.transform = `translate3d(${x * -6}px, ${y * -4}px, 0)`;
      }

      this.rafId = requestAnimationFrame(animate);
    };

    this.rafId = requestAnimationFrame(animate);
  },

  /* ------------------------------------------------------------------
   * HERO 3D TILT, SPECULAR SHEEN & SACRED HOTSPOT INTERACTIONS
   * ------------------------------------------------------------------ */
  initHeroInteractions() {
    this.initHeroTilt();
    this.initHeroHotspots();
    this.initHeroActions();
  },

  initHeroTilt() {
    const frame = document.getElementById('hero-tilt-frame');
    const sheen = document.getElementById('hero-sheen');
    const hint = document.getElementById('hero-interaction-hint');

    if (!frame) return;

    // Skip 3D tilt if reduced motion or touch device
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (this.isReducedMotion || isTouch) return;

    let bounds = null;

    const updateBounds = () => {
      bounds = frame.getBoundingClientRect();
    };

    frame.addEventListener('mouseenter', () => {
      updateBounds();
      if (hint && !hint.classList.contains('is-hidden')) {
        hint.classList.add('is-hidden');
      }
    }, { passive: true });

    frame.addEventListener('mousemove', (e) => {
      if (!bounds) updateBounds();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const width = bounds.width;
      const height = bounds.height;

      // Normalize -1 to +1
      const normX = (x / width) * 2 - 1;
      const normY = (y / height) * 2 - 1;

      // Max tilt degrees: +/- 7 deg
      const rotX = -normY * 7;
      const rotY = normX * 7;

      frame.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      if (sheen) {
        const pctX = ((x / width) * 100).toFixed(1);
        const pctY = ((y / height) * 100).toFixed(1);
        sheen.style.setProperty('--sheen-x', `${pctX}%`);
        sheen.style.setProperty('--sheen-y', `${pctY}%`);
      }
    }, { passive: true });

    frame.addEventListener('mouseleave', () => {
      frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      if (sheen) {
        sheen.style.setProperty('--sheen-x', '50%');
        sheen.style.setProperty('--sheen-y', '30%');
      }
    }, { passive: true });

    window.addEventListener('resize', updateBounds, { passive: true });
  },

  initHeroHotspots() {
    const hotspots = document.querySelectorAll('.sacred-hotspot');
    const hint = document.getElementById('hero-interaction-hint');

    if (!hotspots.length) return;

    const dismissAll = () => {
      hotspots.forEach(h => h.classList.remove('is-active'));
    };

    hotspots.forEach(btn => {
      let chimeThrottle = false;
      const triggerSound = () => {
        if (chimeThrottle) return;
        chimeThrottle = true;
        if (window.__VISHWAKARMA_AUDIO__ && typeof window.__VISHWAKARMA_AUDIO__.playBell === 'function') {
          window.__VISHWAKARMA_AUDIO__.playBell();
        }
        setTimeout(() => { chimeThrottle = false; }, 400);
      };

      btn.addEventListener('mouseenter', () => {
        triggerSound();
        if (hint) hint.classList.add('is-hidden');
      }, { passive: true });

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerSound();
        const wasActive = btn.classList.contains('is-active');
        dismissAll();
        if (!wasActive) {
          btn.classList.add('is-active');
        }
        if (hint) hint.classList.add('is-hidden');
      });

      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    // Tap outside closes any active tooltip
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sacred-hotspot')) {
        dismissAll();
      }
    }, { passive: true });
  },

  initHeroActions() {
    // Full Darshan View button
    const darshanBtn = document.getElementById('btn-hero-darshan');
    if (darshanBtn) {
      darshanBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.__VISHWAKARMA_AUDIO__ && typeof window.__VISHWAKARMA_AUDIO__.playBell === 'function') {
          window.__VISHWAKARMA_AUDIO__.playBell();
        }
        if (window.__VISHWAKARMA_GALLERY__ && typeof window.__VISHWAKARMA_GALLERY__.openLightbox === 'function') {
          window.__VISHWAKARMA_GALLERY__.openLightbox(0);
        }
      });
    }

    // Interactive Shloka Ribbon
    const shlokaRibbon = document.getElementById('hero-shloka-trigger');
    if (shlokaRibbon) {
      const triggerShloka = () => {
        if (window.__VISHWAKARMA_AUDIO__ && typeof window.__VISHWAKARMA_AUDIO__.playBell === 'function') {
          window.__VISHWAKARMA_AUDIO__.playBell();
        }
        shlokaRibbon.style.transform = 'scale(0.96)';
        setTimeout(() => {
          shlokaRibbon.style.transform = '';
        }, 180);
      };

      shlokaRibbon.addEventListener('click', triggerShloka);
      shlokaRibbon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerShloka();
        }
      });
    }
  },

  /* ------------------------------------------------------------------
   * 4. LIGHTWEIGHT PARTICLE SYSTEM
   * Very subtle floating golden dust motes with zero canvas overhead
   * ------------------------------------------------------------------ */
  initParticles() {
    if (this.isReducedMotion) return;

    const particleContainer = document.getElementById('hero-particles');
    if (!particleContainer) return;

    const particleCount = window.innerWidth < 768 ? 10 : 20;

    for (let i = 0; i < particleCount; i++) {
      const mote = document.createElement('div');
      mote.className = 'particle-mote';

      const left = Math.random() * 96 + 2; // 2% to 98%
      const top = Math.random() * 85 + 10;  // 10% to 95%
      const duration = (Math.random() * 10 + 12).toFixed(1); // 12s - 22s
      const delay = (Math.random() * 8).toFixed(1);         // 0s - 8s
      const size = (Math.random() * 2 + 2).toFixed(1);      // 2px - 4px
      const opacity = (Math.random() * 0.35 + 0.2).toFixed(2);

      mote.style.left = `${left}%`;
      mote.style.top = `${top}%`;
      mote.style.width = `${size}px`;
      mote.style.height = `${size}px`;
      mote.style.opacity = opacity;
      mote.style.animationDuration = `${duration}s`;
      mote.style.animationDelay = `${delay}s`;

      particleContainer.appendChild(mote);
    }
  },

  /* ------------------------------------------------------------------
   * 5. SCROLL REVEALS FOR SUBSEQUENT SECTIONS
   * ------------------------------------------------------------------ */
  initScrollReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-fade, .reveal-scale').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-scale');
    if (revealElements.length === 0) return;

    this.observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => this.observer.observe(el));
  }
};

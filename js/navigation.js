/**
 * ====================================================================
 * 🕉️ VISHWAKARMA — THE DIVINE ARCHITECT
 * Navigation Controller Module (Desktop & Mobile Drawer)
 * ====================================================================
 */

export const NavigationController = {
  navElement: null,
  navLinks: [],
  sections: [],
  mobileMenuBtn: null,
  mobileCloseBtn: null,
  mobilePanel: null,
  mobileLinks: [],
  scrollCta: null,

  init() {
    this.navElement = document.querySelector('.nav-bar');
    this.navLinks = Array.from(document.querySelectorAll('.nav-link'));
    this.sections = Array.from(document.querySelectorAll('section[id]'));
    this.mobileMenuBtn = document.getElementById('mobile-menu-open');
    this.mobileCloseBtn = document.getElementById('mobile-menu-close');
    this.mobilePanel = document.getElementById('mobile-nav-panel');
    this.mobileLinks = Array.from(document.querySelectorAll('.mobile-nav-item'));
    this.scrollCta = document.getElementById('scroll-cta');

    this.bindScrollEvents();
    this.bindSmoothScroll();
    this.setupIntersectionObserver();
    this.setupMobileMenu();
    this.setupScrollCta();
    this.setupBackToTop();
    this.setupShareFeature();
    this.setupExploreAgain();
  },

  bindScrollEvents() {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (this.navElement) {
        if (currentScrollY > 50) {
          this.navElement.classList.add('scrolled');
        } else {
          this.navElement.classList.remove('scrolled');
        }
      }

      // Back to top button visibility toggle
      const bttBtn = document.getElementById('back-to-top');
      if (bttBtn) {
        if (currentScrollY > 600) {
          bttBtn.classList.add('is-visible');
        } else {
          bttBtn.classList.remove('is-visible');
        }
      }
    }, { passive: true });
  },

  bindSmoothScroll() {
    const allAnchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));

    allAnchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.length > 1) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            this.closeMobileMenu();

            // Smooth scroll with calibrated offset for floating nav
            const navHeight = this.navElement ? this.navElement.offsetHeight + 18 : 20;
            const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = Math.max(0, elementPosition - navHeight);

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            const matchingNavLink = this.navLinks.find(nl => nl.getAttribute('href') === targetId);
            if (matchingNavLink) {
              this.setActiveLink(matchingNavLink);
            }
          }
        }
      });
    });
  },

  setupMobileMenu() {
    if (!this.mobileMenuBtn || !this.mobilePanel) return;

    // Open Menu
    this.mobileMenuBtn.addEventListener('click', () => {
      this.openMobileMenu();
    });

    // Close Menu via button
    if (this.mobileCloseBtn) {
      this.mobileCloseBtn.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    }

    // Keyboard support: Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobilePanel.classList.contains('is-open')) {
        this.closeMobileMenu();
        this.mobileMenuBtn.focus();
      }
    });
  },

  openMobileMenu() {
    this.mobilePanel.classList.add('is-open');
    this.mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    if (this.mobileCloseBtn) {
      setTimeout(() => this.mobileCloseBtn.focus(), 150);
    }
  },

  closeMobileMenu() {
    if (!this.mobilePanel) return;
    this.mobilePanel.classList.remove('is-open');
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  },

  setupScrollCta() {
    if (!this.scrollCta) return;

    this.scrollCta.addEventListener('click', () => {
      const introSection = document.getElementById('intro-transition');
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },

  setupBackToTop() {
    const bttBtn = document.getElementById('back-to-top');
    if (!bttBtn) return;

    bttBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  setupExploreAgain() {
    const exploreAgainBtn = document.getElementById('btn-explore-again');
    if (!exploreAgainBtn) return;

    exploreAgainBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  setupShareFeature() {
    const shareBtn = document.getElementById('btn-share-journey');
    const toast = document.getElementById('share-toast');
    if (!shareBtn) return;

    shareBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const shareData = {
        title: 'Vishwakarma — The Divine Architect',
        text: 'A digital journey through creation, craftsmanship and devotion.',
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== 'AbortError') {
            this.copyToClipboardFallback(toast);
          }
        }
      } else {
        this.copyToClipboardFallback(toast);
      }
    });
  },

  copyToClipboardFallback(toast) {
    if (navigator.clipboard && window.location.href) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        this.showToast(toast, 'Link copied to clipboard!');
      }).catch(() => {
        this.showToast(toast, 'Sharing: ' + window.location.href);
      });
    } else {
      this.showToast(toast, 'Sharing: ' + window.location.href);
    }
  },

  showToast(toast, message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3200);
  },

  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window) || this.sections.length === 0) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const matchingLink = this.navLinks.find(link => link.getAttribute('href') === `#${id}`);
          if (matchingLink) {
            this.setActiveLink(matchingLink);
          }
        }
      });
    }, observerOptions);

    this.sections.forEach(section => sectionObserver.observe(section));
  },

  setActiveLink(activeLink) {
    this.navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
  }
};

/**
 * ====================================================================
 * 🕉️ VISHWAKARMA — THE DIVINE ARCHITECT
 * Main Entry Point & Orchestrator (Phase 2 The Complete Katha)
 * ====================================================================
 */

import { NavigationController } from './navigation.js';
import { AnimationController } from './animations.js';
import { StoryController } from './story.js';
import { GalleryController } from './gallery.js';
import { AudioController } from './audio.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🕉️ Vishwakarma — The Divine Architect | Phase 4 Final Darshan, Immersion & Production Active');

  // Initialize modular controllers
  NavigationController.init();
  AnimationController.init();
  StoryController.init();
  GalleryController.init();
  AudioController.init();

  // Expose controllers for testing and inspection
  window.__VISHWAKARMA_STORY__ = StoryController;
  window.__VISHWAKARMA_AUDIO__ = AudioController;
  window.__VISHWAKARMA_GALLERY__ = GalleryController;
});

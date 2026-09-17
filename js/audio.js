/**
 * ====================================================================
 * 🕉️ VISHWAKARMA — THE DIVINE ARCHITECT
 * Devotional Audio Controller Module
 * ====================================================================
 * Strict Rules:
 * 1. ZERO autoplay. Audio never starts without explicit user gesture.
 * 2. Gentle volume fade in and fade out to preserve sacred atmosphere.
 * 3. Default state is ALWAYS muted / sound off.
 */

export const AudioController = {
  buttonElement: null,
  audioElement: null,
  isPlaying: false,
  fadeInterval: null,
  targetVolume: 0.35,
  audioCtx: null,
  droneGain: null,
  droneOscs: [],
  isSynthesizing: false,

  init() {
    this.buttonElement = document.querySelector('.audio-control');
    if (!this.buttonElement) return;

    this.setupAudioElement();
    this.bindEvents();
    this.updateUI();
  },

  setupAudioElement() {
    // Ambient sound synthesized in real-time via Web Audio API (zero external asset requests)
  },

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  },

  startDrone() {
    this.initAudioContext();
    if (!this.audioCtx) return;

    this.stopDrone(); // Clear any existing

    const ctx = this.audioCtx;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 2.0);

    // Warm resonant low-pass filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, ctx.currentTime);
    filter.Q.setValueAtTime(2.5, ctx.currentTime);

    masterGain.connect(filter);
    filter.connect(ctx.destination);
    this.droneGain = masterGain;

    // Sacred Tanpura chord: 136.1 Hz (C# / Om fundamental), 204.15 Hz (Fifth / Pa), 272.2 Hz (Octave Sa)
    const freqs = [136.1, 204.15, 272.2, 136.8];
    const oscTypes = ['sine', 'triangle', 'sine', 'triangle'];

    this.droneOscs = freqs.map((f, i) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = oscTypes[i % oscTypes.length];
      osc.frequency.setValueAtTime(f, ctx.currentTime);
      oscGain.gain.setValueAtTime(0.25 / (i + 1), ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      return osc;
    });

    this.isSynthesizing = true;
  },

  stopDrone() {
    if (this.droneGain && this.audioCtx) {
      const ctx = this.audioCtx;
      this.droneGain.gain.setValueAtTime(this.droneGain.gain.value, ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        this.droneOscs.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch (e) {}
        });
        this.droneOscs = [];
        this.isSynthesizing = false;
      }, 1250);
    }
  },

  playBell() {
    this.playBellChime();
  },

  playBellChime() {
    this.initAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    
    // Temple bell harmonics: Fundamental 587.3 Hz (D5) + non-integer bell overtones
    const partials = [
      { ratio: 1.0, gain: 0.35, decay: 2.8 },
      { ratio: 1.5, gain: 0.20, decay: 2.2 },
      { ratio: 2.76, gain: 0.12, decay: 1.6 },
      { ratio: 4.07, gain: 0.08, decay: 1.0 },
      { ratio: 5.43, gain: 0.04, decay: 0.7 }
    ];

    const fundamental = 587.33;

    partials.forEach(({ ratio, gain, decay }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(fundamental * ratio, now);

      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(gain, now + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(g);
      g.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay + 0.1);
    });
  },

  bindEvents() {
    this.buttonElement.addEventListener('click', () => {
      this.toggleAudio();
    });

    this.buttonElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggleAudio();
      }
    });
  },

  toggleAudio() {
    if (this.isPlaying) {
      this.fadeOutAndPause();
    } else {
      this.playAndFadeIn();
    }
  },

  playAndFadeIn() {
    this.isPlaying = true;
    this.updateUI();
    this.startDrone();
  },

  fadeOutAndPause() {
    this.stopDrone();
    this.isPlaying = false;
    this.updateUI();
  },

  fadeVolume(destVolume, durationMs, onComplete) {
    if (this.fadeInterval) clearInterval(this.fadeInterval);

    const startVolume = this.audioElement.volume;
    const diff = destVolume - startVolume;
    const steps = 20;
    const stepDuration = durationMs / steps;
    let stepCount = 0;

    this.fadeInterval = setInterval(() => {
      stepCount++;
      const current = startVolume + (diff * (stepCount / steps));
      this.audioElement.volume = Math.max(0, Math.min(1, current));

      if (stepCount >= steps) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
        this.audioElement.volume = destVolume;
        if (onComplete) onComplete();
      }
    }, stepDuration);
  },

  updateUI() {
    if (!this.buttonElement) return;

    const labelSpan = this.buttonElement.querySelector('.audio-label') || this.buttonElement;
    if (this.isPlaying) {
      this.buttonElement.classList.add('is-playing');
      this.buttonElement.setAttribute('aria-pressed', 'true');
      labelSpan.textContent = 'Sound ON';
    } else {
      this.buttonElement.classList.remove('is-playing');
      this.buttonElement.setAttribute('aria-pressed', 'false');
      labelSpan.textContent = 'Sound OFF';
    }
  }
};

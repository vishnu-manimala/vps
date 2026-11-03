import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { afterNextRender, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly isDark = signal(false);

  constructor() {
    afterNextRender(() => this.restorePreference());
  }

  toggle(): void {
    const nextValue = !this.isDark();
    this.isDark.set(nextValue);
    this.applyTheme(nextValue);

    if (this.isBrowser) {
      try {
        localStorage.setItem('portfolio-theme', nextValue ? 'dark' : 'light');
      } catch {
        // The theme still works for this visit when storage is unavailable.
      }
    }
  }

  private restorePreference(): void {
    if (!this.isBrowser) return;

    let preference: string | null = null;
    try {
      preference = localStorage.getItem('portfolio-theme');
    } catch {
      // Fall back to the visitor's operating-system preference.
    }

    const dark = preference ? preference === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark.set(dark);
    this.applyTheme(dark);
  }

  private applyTheme(dark: boolean): void {
    this.document.documentElement.dataset['theme'] = dark ? 'dark' : 'light';
    this.document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  }
}

import { Component, inject, input, signal } from '@angular/core';
import { ThemeService } from '../../../../core/theme/theme.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  readonly name = input.required<string>();
  readonly whatsappUrl = input.required<string>();
  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}

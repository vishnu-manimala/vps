import { Component, input } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  readonly initials = input.required<string>();
  protected readonly currentYear = new Date().getFullYear();
}

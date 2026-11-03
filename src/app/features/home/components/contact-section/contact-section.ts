import { Component, input } from '@angular/core';
import { PortfolioProfile } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  readonly profile = input.required<PortfolioProfile>();
}

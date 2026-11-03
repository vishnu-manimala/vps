import { Component, input } from '@angular/core';
import { PortfolioProfile } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly profile = input.required<PortfolioProfile>();
}

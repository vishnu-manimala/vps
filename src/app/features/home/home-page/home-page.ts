import { Component, inject } from '@angular/core';
import { AboutSection } from '../components/about-section/about-section';
import { CareerSection } from '../components/career-section/career-section';
import { ContactSection } from '../components/contact-section/contact-section';
import { HeroSection } from '../components/hero-section/hero-section';
import { ProjectSection } from '../components/project-section/project-section';
import { ProofStrip } from '../components/proof-strip/proof-strip';
import { SiteFooter } from '../components/site-footer/site-footer';
import { SiteHeader } from '../components/site-header/site-header';
import { TestimonialSection } from '../components/testimonial-section/testimonial-section';
import { PortfolioContentService } from '../data-access/portfolio-content.service';

@Component({
  selector: 'app-home-page',
  imports: [
    AboutSection,
    CareerSection,
    ContactSection,
    HeroSection,
    ProjectSection,
    ProofStrip,
    SiteFooter,
    SiteHeader,
    TestimonialSection,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  protected readonly content = inject(PortfolioContentService).content;
}

import { Component, input } from '@angular/core';
import { AboutStory } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
  readonly story = input.required<AboutStory>();
}

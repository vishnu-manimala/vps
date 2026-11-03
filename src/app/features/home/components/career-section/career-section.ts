import { Component, input } from '@angular/core';
import { ExperienceItem, SkillGroup } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-career-section',
  templateUrl: './career-section.html',
  styleUrl: './career-section.css',
})
export class CareerSection {
  readonly experience = input.required<ExperienceItem[]>();
  readonly skillGroups = input.required<SkillGroup[]>();
  readonly resumeUrl = input<string>();
}

import { Component, input } from '@angular/core';
import { ProjectCaseStudy } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.html',
  styleUrl: './project-section.css',
})
export class ProjectSection {
  readonly projects = input.required<ProjectCaseStudy[]>();
}

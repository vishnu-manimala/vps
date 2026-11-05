import { Component, computed, input } from '@angular/core';
import { ProjectCaseStudy } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.html',
  styleUrl: './project-section.css',
})
export class ProjectSection {
  readonly projects = input.required<ProjectCaseStudy[]>();
  readonly projectGroups = computed(() => {
    const projects = this.projects();

    return [
      {
        id: 'production',
        eyebrow: 'BUILT AT 369 DEGREE GROUP',
        title: 'Production backends',
        description:
          'Selected backend systems I designed and built from end to end between September 2024 and October 2025. The services were discontinued after the company closed.',
        projects: projects.filter((project) => project.category === 'production'),
      },
      {
        id: 'learning',
        eyebrow: 'BROtotype · INTERNSHIP',
        title: 'Learning projects',
        description:
          'Projects I built while developing my full-stack skills during my MEAN stack internship.',
        projects: projects.filter((project) => project.category === 'learning'),
      },
    ].filter((group) => group.projects.length > 0);
  });
}

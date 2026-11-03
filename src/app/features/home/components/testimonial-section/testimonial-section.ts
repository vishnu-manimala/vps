import { Component, input } from '@angular/core';
import { Testimonial } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.html',
  styleUrl: './testimonial-section.css',
})
export class TestimonialSection {
  readonly testimonial = input<Testimonial | null>(null);
}

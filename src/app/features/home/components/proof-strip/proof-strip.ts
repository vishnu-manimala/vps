import { Component, input } from '@angular/core';
import { Metric } from '../../models/portfolio-content.model';

@Component({
  selector: 'app-proof-strip',
  templateUrl: './proof-strip.html',
  styleUrl: './proof-strip.css',
})
export class ProofStrip {
  readonly metrics = input.required<Metric[]>();
}

import { Injectable } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../data/portfolio-content';
import { PortfolioContent } from '../models/portfolio-content.model';

/** Local content source for now; later this boundary can be backed by an API. */
@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  readonly content: PortfolioContent = PORTFOLIO_CONTENT;
}

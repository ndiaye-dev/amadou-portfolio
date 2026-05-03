import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PortfolioProfile } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.scss'
})
export class FooterSectionComponent {
  readonly profile = input.required<PortfolioProfile>();
  readonly currentYear = input.required<number>();
}

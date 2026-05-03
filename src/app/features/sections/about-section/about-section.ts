import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PortfolioProfile } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss'
})
export class AboutSectionComponent {
  readonly profile = input.required<PortfolioProfile>();
}

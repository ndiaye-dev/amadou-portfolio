import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NavItem, PortfolioProfile } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent {
  readonly profile = input.required<PortfolioProfile>();
  readonly navItems = input.required<NavItem[]>();
}

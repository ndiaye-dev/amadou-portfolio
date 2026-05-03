import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ContactItem, PortfolioProfile } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss'
})
export class ContactSectionComponent {
  readonly profile = input.required<PortfolioProfile>();
  readonly contacts = input.required<ContactItem[]>();
}

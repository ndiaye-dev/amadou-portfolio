import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { EducationItem } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss'
})
export class EducationSectionComponent {
  readonly education = input.required<EducationItem[]>();
}

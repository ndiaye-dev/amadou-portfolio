import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProjectItem } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss'
})
export class ProjectsSectionComponent {
  readonly projects = input.required<ProjectItem[]>();
}

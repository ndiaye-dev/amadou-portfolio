import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SkillCategory } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss'
})
export class SkillsSectionComponent {
  readonly categories = input.required<SkillCategory[]>();

  private readonly skillIcons: Record<string, string> = {
    Angular: '/tech-icons/angular.svg',
    React: '/tech-icons/react.svg',
    JavaScript: '/tech-icons/javascript.svg',
    PHP: '/tech-icons/php.svg',
    'Spring Boot': '/tech-icons/springboot.svg',
    Java: '/tech-icons/java.svg',
    'API REST': '/tech-icons/api-rest.svg',
    PostgreSQL: '/tech-icons/postgresql.svg',
    MySQL: '/tech-icons/mysql.svg',
    Flutter: '/tech-icons/flutter.svg',
    Dart: '/tech-icons/dart.svg',
    Firebase: '/tech-icons/firebase.svg',
    Git: '/tech-icons/git.svg',
    GitHub: '/tech-icons/github.svg',
    Postman: '/tech-icons/postman.svg',
    'IntelliJ IDEA': '/tech-icons/intellijidea.svg',
    'Visual Studio Code': '/tech-icons/visualstudiocode.svg',
    Vercel: '/tech-icons/vercel.svg',
    Figma: '/tech-icons/figma.svg'
  };

  iconFor(skill: string): string {
    return this.skillIcons[skill] ?? '/tech-icons/api-rest.svg';
  }
}

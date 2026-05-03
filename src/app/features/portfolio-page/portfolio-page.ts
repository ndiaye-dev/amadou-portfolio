import { Component, HostListener, signal } from '@angular/core';
import { CONTACTS, EDUCATION, NAV_ITEMS, PROFILE, PROJECTS, SKILL_CATEGORIES } from '../../core/data/portfolio.data';
import { AboutSectionComponent } from '../sections/about-section/about-section';
import { ContactSectionComponent } from '../sections/contact-section/contact-section';
import { EducationSectionComponent } from '../sections/education-section/education-section';
import { FooterSectionComponent } from '../sections/footer-section/footer-section';
import { HeroSectionComponent } from '../sections/hero-section/hero-section';
import { ProjectsSectionComponent } from '../sections/projects-section/projects-section';
import { SkillsSectionComponent } from '../sections/skills-section/skills-section';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent
  ],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss'
})
export class PortfolioPageComponent {
  readonly profile = PROFILE;
  readonly navItems = NAV_ITEMS;
  readonly projects = PROJECTS;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly education = EDUCATION;
  readonly contacts = CONTACTS;
  readonly currentYear = new Date().getFullYear();
  readonly activeSection = signal('accueil');

  setActiveSection(fragment: string): void {
    this.activeSection.set(fragment);
  }

  @HostListener('window:scroll')
  updateActiveSection(): void {
    const viewportOffset = 120;
    const current = this.navItems
      .map((item) => ({
        fragment: item.fragment,
        top: document.getElementById(item.fragment)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY
      }))
      .filter((item) => item.top <= viewportOffset)
      .at(-1);

    if (current) {
      this.activeSection.set(current.fragment);
    }
  }
}

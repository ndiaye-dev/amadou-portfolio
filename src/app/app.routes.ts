import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './features/portfolio-page/portfolio-page';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

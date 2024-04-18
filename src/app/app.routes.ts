import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/components/home-page/home-page.component').then(m => m.HomePageComponent),
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./shared/components/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '**',
    redirectTo: '/notfound',
  },
];

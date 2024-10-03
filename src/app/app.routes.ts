import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Mas Salud IPS'
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about-page/about-page.component').then((m) => m.AboutPageComponent),
    title: 'Acerca de Nosotros'
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/services-page/services-page.component').then((m) => m.ServicesPageComponent),
    title: 'Servicios'
  },
  {
    path: 'productos/:slug',
    loadComponent: () =>
      import('./pages/services-details-page/services-details-page.component').then(
        (m) => m.ServicesDetailsPageComponent
      )
  },
  {
    path: 'proximamente/:slug',
    loadComponent: () =>
      import('./pages/blog-details-page/blog-details-page.component').then((m) => m.BlogDetailsPageComponent)
  },
  {
    path: 'contactanos',
    loadComponent: () => import('./pages/contact-page/contact-page.component').then((m) => m.ContactPageComponent)
  },
  { path: '**', component: NotFoundComponent }
];

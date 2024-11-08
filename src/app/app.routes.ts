import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about.component';
import { ContactComponent } from './pages/contact.component';
import { DinerComponent } from './pages/diner.component';
import { WorkComponent } from './pages/work.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'work',
    component: WorkComponent,
    data: { animation: 'WorkPage' },
  },
  {
    path: 'diner',
    component: DinerComponent,
    data: { animation: 'DinerPage' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'ContactPage' },
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { DinerComponent } from './diner/diner.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'diner', component: DinerComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
];

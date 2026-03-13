import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { SampleApi } from './pages/sample-api/sample-api';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'sample-api', component: SampleApi },
];

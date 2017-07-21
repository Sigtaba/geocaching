import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AddComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

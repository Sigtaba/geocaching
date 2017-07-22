import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AddComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'geocaches/:id',
    component: InfoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

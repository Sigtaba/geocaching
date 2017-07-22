import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AddComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

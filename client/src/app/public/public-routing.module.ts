import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { DetailResolver } from '../core/resolvers/detail-resolver';

// Root routes of this particular module: PUBLIC.
const routes: Routes = [
  // This module has its own children. Be careful with redirection.
    {
      path: '', component: PublicComponent,
      children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'create-suitcase',
        data: {
          createMode: true,
        },
        loadChildren: () => import('./create-suitcase/create-suitcase.module').then(m => m.CreateSuitcaseModule) },
      { path: 'edit-suitcase/:name',
        resolve: {
          detail: DetailResolver
        },
        data: {
          createMode: false,
        },
        loadChildren: () => import('./create-suitcase/create-suitcase.module').then(m => m.CreateSuitcaseModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

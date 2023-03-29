import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersTablePageComponent} from './pages/users-table-page/users-table-page.component';

const routes: Routes = [
  {path: '', component: UsersTablePageComponent},
  {path: 'about', loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

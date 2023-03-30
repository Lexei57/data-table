import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DxDataGridModule} from 'devextreme-angular';
import {AboutComponent} from '../components/about/about.component';
import {FilterTableComponent} from '../components/filter-table/filter-table.component';
import {HeaderComponent} from '../components/shared/header/header.component';
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {UsersTableComponent} from '../components/users-table/users-table.component';
import {UsersTablePageComponent} from './users-table-page/users-table-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {path: '', component: AboutPageComponent}
]

@NgModule({
  declarations: [
    UsersTableComponent,
    UsersTablePageComponent,
    UserDetailsComponent,
    FilterTableComponent,
    AboutComponent,
    AboutPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent
  ]
})
export  class PagesModule {}

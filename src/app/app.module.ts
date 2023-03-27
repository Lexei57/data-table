import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserTablePageComponent } from './pages/user-table-page/user-table-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserTablePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

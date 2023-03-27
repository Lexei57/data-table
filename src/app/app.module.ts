import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DxDataGridModule} from 'devextreme-angular';

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
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

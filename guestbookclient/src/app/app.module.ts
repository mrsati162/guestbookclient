import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { GuestbookComponent } from './modules/guestbook/guestbook.component';
import { GuestbookcreateComponent } from './modules/guestbookcreate/guestbookcreate.component';
import { GuestbookupdateComponent } from './modules/guestbookupdate/guestbookupdate.component';


const routes: Routes = [
                { path: 'save', component: GuestbookcreateComponent },
                { path: 'getall', component: GuestbookComponent },
                { path: 'update', component: GuestbookupdateComponent },
                { path: '', redirectTo: '/getall', pathMatch: 'full'}
              ];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GuestbookComponent,
    GuestbookcreateComponent,
    GuestbookupdateComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

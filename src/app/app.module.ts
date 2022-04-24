import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChambresComponent } from './chambres/chambres.component';
import { OthernavbarComponent } from './othernavbar/othernavbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChambrejustineComponent } from './chambrejustine/chambrejustine.component';
import { ChambreamelieComponent } from './chambreamelie/chambreamelie.component';
import { ChambrecharlotteComponent } from './chambrecharlotte/chambrecharlotte.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ChambresComponent,
    OthernavbarComponent,
    PagenotfoundComponent,
    ChambrejustineComponent,
    ChambreamelieComponent,
    ChambrecharlotteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

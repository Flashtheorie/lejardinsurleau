import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambreamelieComponent } from './chambreamelie/chambreamelie.component';
import { ChambrecharlotteComponent } from './chambrecharlotte/chambrecharlotte.component';
import { ChambrejustineComponent } from './chambrejustine/chambrejustine.component';
import { ChambresComponent } from './chambres/chambres.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'chambres', component: ChambresComponent},
  { path: 'chambres/justine', component: ChambrejustineComponent},
  { path: 'chambres/amelie', component: ChambreamelieComponent},
  { path: 'chambres/charlotte', component: ChambrecharlotteComponent},

  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', 
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
///<reference path="components/home/tab-start/tab-start.component.ts"/>
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard.service';

import { TabDetailsComponent } from './components/home/tab-details/tab-details.component';
import { TabStartComponent } from './components/home/tab-start/tab-start.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
    {path: '', component: TabStartComponent },
    {path: 'tab/:id', component: TabDetailsComponent}
  ]},

  { path: '**', redirectTo: '' }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}

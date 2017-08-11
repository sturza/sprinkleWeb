///<reference path="components/home/tab-start/tab-start.component.ts"/>
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutSprinkleComponent } from './components/about-sprinkle/about-sprinkle.component';
import { AuthGuard } from './services/auth-guard.service';
import { TabStartComponent } from "app/components/home/tab-start/tab-start.component";
import { TabDetailsComponent } from './components/home/tab-details/tab-details.component';


const appRoutes: Routes=[
  { path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
    {path: '', component: TabStartComponent },
    {path: 'tab/:id',component: TabDetailsComponent}
  ]},
  { path: 'about-sprinkle', component: AboutSprinkleComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}


];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule{

}

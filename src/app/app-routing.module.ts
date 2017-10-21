import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

import {TabDetailsComponent} from './components/home/tab-details/tab-details.component';
import {TabStartComponent} from './components/home/tab-start/tab-start.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: TabStartComponent },
    { path: 'module/:uid', component: TabDetailsComponent }
  ]},

  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

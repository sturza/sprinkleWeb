import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { TabItemComponent } from './components/home/tab-list/tab-item/tab-item.component';
import { TabListComponent } from './components/home/tab-list/tab-list.component';
import { TabService } from './services/tab.service';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './services/database.service';
import { TabDetailsComponent } from './components/home/tab-details/tab-details.component';
import { TabStartComponent } from './components/home/tab-start/tab-start.component';
import { SelectModalComponent } from './components/home/tab-list/tab-modals/select-modal/select-modal.component';
import { CreateModalComponent } from './components/home/tab-list/tab-modals/create-modal/create-modal.component';

@NgModule({
declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    HeaderComponent,
    TabListComponent,
    TabItemComponent,
    TabDetailsComponent,
    TabStartComponent,
    SelectModalComponent,
    CreateModalComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [TabService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

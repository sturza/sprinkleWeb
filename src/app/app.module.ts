import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { TabItemComponent } from './components/home/tab-list/tab-item/tab-item.component';
import { TabListComponent } from './components/home/tab-list/tab-list.component';
import { ModuleService } from './services/module.service';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './services/database.service';
import { TabDetailsComponent } from './components/home/tab-details/tab-details.component';
import { TabStartComponent } from './components/home/tab-start/tab-start.component';
import { SelectModalComponent } from './components/home/tab-list/tab-modals/add-module-modal/add-module-modal.component';
import { CreateModalComponent } from './components/home/tab-list/tab-modals/create-stat-modal/create-stat-modal.component';
import { GraphComponent } from './components/home/tab-details/graph/graph.component';
import { FileUploadModule } from 'ng2-file-upload';
import { StatService } from './services/stat.service';
import { ChartsModule } from 'ng2-charts';
import { ControlsComponent } from './components/home/tab-details/controls/controls.component';

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
    CreateModalComponent,
    GraphComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterializeModule,
    FileUploadModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [ModuleService, StatService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

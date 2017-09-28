import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

import { ModuleService } from './services/module.service';
import { StatService } from './services/stat.service';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // set this to false for production deployment
  userEntered = false;

  constructor(private moduleService: ModuleService, private statService: StatService)  {}

  // Setting a timer to load modules every 15 seconds
  ngOnInit(): void {
    const databaseObservable = Observable.timer(0, environment.refreshInterval);
    databaseObservable.subscribe(t => {
      this.moduleService.retrieveModules();
      this.statService.retrieveStats();
    });
  }
}

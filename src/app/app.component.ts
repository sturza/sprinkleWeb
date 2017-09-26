import { Component, OnInit } from '@angular/core';
import { ModuleService } from './services/module.service';
import { StatService } from './services/stat.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // set this to false for production deployment
  userEntered = true;

  constructor(private moduleService: ModuleService, private statService: StatService)  {}

  ngOnInit(): void {
    let databaseObservable = Observable.timer(0, 30000);
    databaseObservable.subscribe(t => {
      this.moduleService.retrieveModules();
      this.statService.retrieveStats();
    });
  }
}

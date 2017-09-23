import { Component, OnInit } from '@angular/core';
import { ModuleService } from './services/module.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  //set this to false for production deployment
  userEntered = false;

  constructor(private tabService: ModuleService)  {}

  ngOnInit(): void {
    this.tabService.retrieveModules();
  }
}

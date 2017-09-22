import { Component, OnInit } from '@angular/core';
import { TabService } from './services/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  //set this to false for production deployment
  userEntered = false;

  constructor(private tabService: TabService)  {}

  ngOnInit(): void {
    this.tabService.retrieveTabs();
  }
}

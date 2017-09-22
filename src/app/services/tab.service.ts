import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Tab } from '../models/tab.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TabService {

  private tabs: Tab[] = [];

  public tabsSubject = new Subject<Tab[]>();

  constructor(private databaseService: DatabaseService) {}

  retrieveTabs() {
      this.databaseService.getTabs().subscribe(
        (tabs) => {
          this.tabs = tabs;
          console.log(tabs);
          this.tabsSubject.next(this.tabs.slice());
        },
        (error)=> console.log(error)
      );
  }

  getTabs() {
    return this.tabs.slice();
  }

  getTab(id: number){
    return this.tabs.find(tab => tab.id === id);
  }

  addTab(tab: Tab){
    this.databaseService.postTab(tab).subscribe(
      response => console.log(response)
    );
  }

  removeTab(id: number) {
    this.databaseService.deleteTab(id).subscribe(
      response => console.log(response)
    );
  }
}

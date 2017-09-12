import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Tab } from '../../../models/tab.model';
import { TabService } from '../../../services/tab.service';
import { Subscription } from 'rxjs/Subscription';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})

export class TabListComponent implements OnInit, OnDestroy {

  tabs: Tab[] = [];

  subscription: Subscription;
  modalActions = new EventEmitter<string|MaterializeAction>();

  selectedTab = '';

  availableTabs = [
    new Tab(null, 'cetitluvreitu', '/assets/tomato.jpg', null, null, null),
    new Tab(null, 'oricealttitlu', '/assets/salad.jpg', null, null, null)
  ];

  constructor(private tabService: TabService) {
  }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit() {
    this.subscription = this.tabService.tabsSubject.subscribe(
      (tabs) => this.tabs = tabs
    );
    this.tabs = this.tabService.getTabs();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onAddTab() {
    this.tabService.addTab(this.availableTabs[+this.selectedTab]);
  }

}

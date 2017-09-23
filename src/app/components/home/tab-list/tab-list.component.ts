import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { Subscription } from 'rxjs/Subscription';
import { MaterializeAction } from 'angular2-materialize';

import {Observable} from 'rxjs/Rx';
import { Module } from '../../../models/module.model';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})

export class TabListComponent implements OnInit, OnDestroy {

  tabs: Module[] = [];

  subscription: Subscription;
  modalActions = new EventEmitter<string|MaterializeAction>();

  displayedModal = 'select';

  constructor(private moduleService: ModuleService) {
  }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }

  ngOnInit() {
    this.subscription = this.moduleService.modulesSubject.subscribe(
      (tabs) => this.tabs = tabs
    );
    this.tabs = this.moduleService.getModules();
    console.log(this.tabs);

        let tabsObservable = Observable.timer(0,5000);
        tabsObservable.subscribe(t => {
          this.tabs = this.moduleService.getModules();
            console.log(this.tabs);
        });
  }
  onCreateModal(){
    this.displayedModal = 'create';
    console.log(this.displayedModal);
  }
  onSelectModal(){
    this.displayedModal = 'select';
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}

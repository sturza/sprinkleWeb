import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { Subscription } from 'rxjs/Subscription';

import { ModuleService } from '../../../services/module.service';
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
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  ngOnInit() {
    this.subscription = this.moduleService.modulesSubject.subscribe(
      (tabs) => this.tabs = tabs
    );
    this.tabs = this.moduleService.getModules();
    console.log(this.tabs);
  }
  onCreateModal() {
    this.displayedModal = 'create';
    console.log(this.displayedModal);
  }
  onSelectModal() {
    this.displayedModal = 'select';
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}

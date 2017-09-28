import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ModuleService } from 'app/services/module.service';
import { Module } from 'app/models/module.model'

@Component({
  selector: 'app-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.css']
})
export class TabDetailsComponent implements OnInit, OnDestroy {

  private uid: string;

  tabPromise: Observable<Module> ;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private moduleService: ModuleService) {}

  ngOnInit() {
    // Listening for params from the router link
    this.route.params.subscribe(
      (params) => {
        this.uid = params['uid'];
        // Updating the details with real time data
        this.tabPromise = new Observable(observer => {
          this.subscription = this.moduleService.modulesSubject.subscribe(
            (tabs) => {
              const tab = this.moduleService.getModule(this.uid);
              observer.next(tab);
            }
          );
          observer.next(this.moduleService.getModule(this.uid));
        });
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onRemoveTab() {
    this.moduleService.removeModule(this.uid);
  }
  onWaterTab() {
    this.moduleService.waterModule(this.uid);
  }
}

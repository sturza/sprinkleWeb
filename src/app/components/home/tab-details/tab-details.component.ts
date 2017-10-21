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

  modulePromise: Observable<Module>;
  subscription: Subscription;

  displayControls = true;

  constructor(private route: ActivatedRoute, private router: Router, private moduleService: ModuleService) {}

  ngOnInit() {
    // Listening for params from the router link
    this.route.params.subscribe(
      (params) => {
        this.uid = params['uid'];
        // Updating the details with real time data
        this.modulePromise = new Observable(observer => {
          this.subscription = this.moduleService.modulesSubject.subscribe(
            (modules) => {
              const module = this.moduleService.getModule(this.uid);
              observer.next(module);
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

  onRemoveModule() {
    this.moduleService.removeModule(this.uid);
    this.router.navigate(['/']);
  }

  onWaterModule() {
    this.moduleService.waterModule(this.uid);
  }

  onSwitchComponent() {
    this.displayControls = !this.displayControls;
  }
}

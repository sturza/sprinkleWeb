import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModuleService } from '../../../services/module.service';
import { Module } from '../../../models/module.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.css']
})
export class TabDetailsComponent implements OnInit, OnDestroy{

  private id: number;

  tabPromise: Observable<Module> ;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private moduleService: ModuleService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.tabPromise = new Observable(observer => {
          this.subscription = this.moduleService.modulesSubject.subscribe(
            (tabs) => {
              const tab = this.moduleService.getModule(this.id);
              observer.next(tab);
            }
          );
          observer.next(this.moduleService.getModule(this.id));
        });
      }
    );
  }
  ngOnDestroy(){
    console.log('onDestroy');
  }
  onRemoveTab() {
    this.moduleService.removeModule(this.id);
  }
  onWaterTab() {
    this.moduleService.waterModule(this.id);
  }
}

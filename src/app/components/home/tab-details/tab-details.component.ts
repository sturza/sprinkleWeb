import { Component, OnDestroy, OnInit } from '@angular/core';
import { TabService } from '../../../services/tab.service';
import { Tab } from '../../../models/tab.model';
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

  tabPromise: Observable<Tab> ;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private tabService: TabService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.tabPromise = new Observable(observer => {
          console.log('tabPromise with id ' + this.id);
          this.subscription = this.tabService.tabsSubject.subscribe(
            (tabs) => {
              const tab = this.tabService.getTab(this.id);
              observer.next(tab);
            }
          );
          observer.next(this.tabService.getTab(this.id));
        });
      }
    );
  }
  ngOnDestroy(){
    console.log('onDestroy');
  }
}

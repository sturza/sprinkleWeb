import { Component, Input, OnInit } from '@angular/core';
import { Tab } from '../../../../models/tab.model';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

  @Input() tab: Tab;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Module } from '../../../../models/module.model';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

  @Input() tab: Module;

  constructor() { }

  ngOnInit() {
  }

}

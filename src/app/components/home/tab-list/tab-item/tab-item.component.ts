import { Component, Input, OnInit } from '@angular/core';

import { Module } from 'app/models/module.model';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {

  @Input() module: Module;

  constructor() { }

  ngOnInit() {
    console.log(this.module.stat.imagePath);
  }

}

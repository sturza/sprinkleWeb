import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Input() modulePromise;

  @Output() removeModule = new EventEmitter<any>();
  @Output() waterModule = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRemoveModule() {
    this.removeModule.emit();
  }

  onWaterModule() {
    this.waterModule.emit();
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Module } from '../../../../../models/module.model';
import { StatService } from '../../../../../services/stat.service';

@Component({
  selector: 'app-select-modal',
  templateUrl: './add-module-modal.component.html',
  styleUrls: ['./add-module-modal.component.css']
})
export class SelectModalComponent implements OnInit {
  moduleService: any;

  @Input() modalActions: EventEmitter<any>;

  selectedStat = '';

  availableStats = [
    new Module(1, 'cetitluvreitu', 23, "43%", "52%"),
    new Module(2, 'oricealttitlu', 24.2, "47%", "51%")
  ];

  @Output() onCreateModal: EventEmitter<any> = new EventEmitter();

  constructor(private statService: StatService){ }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit() {
  }
  onAddTab() {
    this.moduleService.createModule(this.availableStats[+this.selectedStat]);
    this.closeModal();
  }

  onCancel() {
    this.closeModal();
  }

  onCreate() {
    this.onCreateModal.emit();
  }
}

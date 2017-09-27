import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { StatService } from '../../../../../services/stat.service';
import { ModuleService } from '../../../../../services/module.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-select-modal',
  templateUrl: './add-module-modal.component.html',
  styleUrls: ['./add-module-modal.component.css']
})
export class SelectModalComponent implements OnInit {

  @Input() modalActions: EventEmitter<any>;

  selectedStat = '';

  subscription: Subscription;

  availableStats = [];

  submitPressed = false;

  @Output() onCreateModal: EventEmitter<any> = new EventEmitter();

  constructor(private statService: StatService, private moduleService: ModuleService) { }

  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  ngOnInit() {
    this.subscription = this.statService.statsSubject.subscribe(
      (stats) => this.availableStats = stats
    );
    this.availableStats = this.statService.getStats();
    console.log(this.availableStats);

  }
  onAddTab(moduleForm: NgForm) {
    this.moduleService.createModule(this.availableStats[+this.selectedStat]);
    this.closeModal();
  }

  onCancel() {
    this.closeModal();
  }

  onCreate() {
    this.onCreateModal.emit();
  }

  onDeleteStat() {
    this.statService.removeStat(+this.selectedStat);
  }
}

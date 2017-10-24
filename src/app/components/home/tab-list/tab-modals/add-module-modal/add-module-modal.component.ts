import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { ModuleService } from 'app/services/module.service';
import { StatService } from 'app/services/stat.service';

import { Stat } from 'app/models/stat.model';

declare const Materialize: any;

@Component({
  selector: 'app-select-modal',
  templateUrl: './add-module-modal.component.html',
  styleUrls: ['./add-module-modal.component.css']
})
export class SelectModalComponent implements OnInit {

  @Input() modalActions: EventEmitter<any>;

  selectedStat = '';

  subscription: Subscription;

  availableStats: Stat[] = [];

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

  onAddModule(moduleForm: NgForm) {
    if (moduleForm.valid) {
      console.log(moduleForm.value);
      this.moduleService.createModule(moduleForm.value);
      moduleForm.reset();
      this.selectedStat = '';
      this.closeModal();
    }
  }

  onCancel(moduleForm: NgForm) {
    moduleForm.reset();
    this.selectedStat = '';
    this.closeModal();
  }

  onCreate() {
    this.onCreateModal.emit();
  }

  onDeleteStat() {
    this.statService.removeStat(+this.selectedStat);
    this.selectedStat = '';
  }
}

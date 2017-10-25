import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { ModuleService } from 'app/services/module.service';
import { StatService } from 'app/services/stat.service';
import { DatabaseService } from 'app/services/database.service';

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

  resp: string;

  err: string;

  @Output() onCreateModal: EventEmitter<any> = new EventEmitter();

  constructor(private statService: StatService, private moduleService: ModuleService, private databaseService: DatabaseService) { }

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
      this.databaseService.addModule(moduleForm.value).subscribe(
        response => {
          console.log(response);
          this.resp = response;
          this.moduleService.retrieveModules();
        },
        (error) => {
          this.err = error.error;
          Materialize.toast(this.err, 4000);
        }
      );
      if (this.err) {

      } else {
        ///Close modal
      }
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

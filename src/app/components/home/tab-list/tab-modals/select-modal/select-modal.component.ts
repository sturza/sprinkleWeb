import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from '../../../../../models/tab.model';
import { TabService } from '../../../../../services/tab.service';

@Component({
  selector: 'app-select-modal',
  templateUrl: './select-modal.component.html',
  styleUrls: ['./select-modal.component.css']
})
export class SelectModalComponent implements OnInit {

  @Input() modalActions: EventEmitter<any>;

  selectedTab = '';

  availableTabs = [
    new Tab(null, 'cetitluvreitu', '/assets/tomato.jpg', null, null, null),
    new Tab(null, 'oricealttitlu', '/assets/salad.jpg', null, null, null)
  ];

  @Output() onCreateModal: EventEmitter<any> = new EventEmitter();

  constructor(private tabService: TabService){ }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit() {
  }

  onAddTab() {
    this.tabService.addTab(this.availableTabs[+this.selectedTab]);
    this.closeModal();
  }

  onCancel() {
    this.closeModal();
  }

  onCreate() {
    this.onCreateModal.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @Output() onSelectModal: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCreateTab(tabForm: NgForm){
    console.log(tabForm.value);
    this.onSelectModal.emit();
  }

  onSelect(){
    this.onSelectModal.emit();

  }
}

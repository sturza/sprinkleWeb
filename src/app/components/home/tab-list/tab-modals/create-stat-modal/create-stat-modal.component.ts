import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../../../../../services/database.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-stat-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @Output() onSelectModal: EventEmitter<any> = new EventEmitter();

  public imageUploader: FileUploader = new FileUploader({url: this.databaseService.url + '/store-image/'});

  constructor(private databaseService: DatabaseService) {
  }

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

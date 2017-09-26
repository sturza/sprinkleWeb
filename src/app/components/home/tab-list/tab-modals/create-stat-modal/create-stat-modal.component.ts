import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../../../../../services/database.service';
import { FileUploader } from 'ng2-file-upload';
import { StatService } from '../../../../../services/stat.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-stat-modal.component.html',
  styleUrls: ['./create-stat-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @ViewChild('imageInput') imageInput;

  @Output() onSelectModal: EventEmitter<any> = new EventEmitter();

  submitPressed = false;

  public imageUploader: FileUploader = new FileUploader({url: this.databaseService.url + '/store-image/'});

  constructor(private statService: StatService, private databaseService: DatabaseService) {
  }

  ngOnInit() {
  }

  onCreateTab(statForm: NgForm){
    if (statForm.valid) {
      statForm.value.imagePath = this.imageInput.nativeElement.value;
      console.log(statForm.value);
      // this.statService.createStat(statForm);
      this.onSelectModal.emit();
    } else {
      this.submitPressed = true;
    }
  }

  imageChanged() {
    console.log('image path changed');
  }

  formChanged() {
    this.submitPressed = false;
  }

  onSelect(){
    this.onSelectModal.emit();
  }
}

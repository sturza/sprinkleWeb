import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FileUploader } from 'ng2-file-upload';

import { StatService } from '../../../../../services/stat.service';
import { DatabaseService } from '../../../../../services/database.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-stat-modal.component.html',
  styleUrls: ['./create-stat-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @ViewChild('imageInput') imageInput;
  @ViewChild('imageFile') imageFile;

  @Output() onSelectModal: EventEmitter<any> = new EventEmitter();

  public imageUploader: FileUploader = new FileUploader({url: this.databaseService.url + '/upload-file/'});

  submitPressed = false;

  constructor(private statService: StatService, private databaseService: DatabaseService) {
  }

  ngOnInit() {
  }
  // Checking if the form is correctly completed and uploading the information
  onCreateTab(statForm: NgForm) {
    if (statForm.valid) {
      statForm.value.imagePath = this.imageInput.nativeElement.value;
      this.imageUploader.onBeforeUploadItem = (item) => {
        item.withCredentials = false;
      };
      this.imageUploader.uploadAll();
      // this.databaseService.uploadFile(this.imageFile.nativeElement.files).subscribe(
      //   response => console.log(response)
      // );
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

  // Initializing before the user completes the fields
  formChanged() {
    this.submitPressed = false;
  }

  onSelect() {
    this.onSelectModal.emit();
  }
}

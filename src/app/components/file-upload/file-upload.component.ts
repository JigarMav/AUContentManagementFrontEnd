import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialService } from 'src/app/services/materialService/material.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  trainerId: number;
  files: any = [];

  constructor(
    private materialService: MaterialService,
    public dialogRef: MatDialogRef<FileUploadComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {
    this.trainerId = Number(localStorage.getItem('userId'));
    this.dialogRef.updateSize('80%', '80%');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  uploadFile(event) {
    for (const index of event) {
      this.files.push(index);
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

  sendFilesToDB() {
    this.materialService
      .addTrainingMaterial(this.files, this.data, this.trainerId)
      .subscribe((response) => {
        console.log(response);
        alert('File Added Successfully' + 'Done!');
        this.files = [];
      });
    this.dialogRef.close();
  }
}

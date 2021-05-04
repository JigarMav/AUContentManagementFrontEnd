import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Material } from 'src/app/models/Material';
import { MaterialService } from 'src/app/services/materialService/material.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {
  trainerId: number = Number(localStorage.getItem('userID'));
  unprocessedFiles = [];
  cId: number;
  mode: string;

  constructor(
    private materialService: MaterialService,
    public dialogRef: MatDialogRef<FilesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.cId = data.courseId;
    this.mode = data.mode;
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('30%', '50%');
    this.getMaterials();
  }

  getMaterials() {
    console.log('getting material for ', this.cId);
    console.log(this.mode);
    this.materialService
      .getMaterialsByCourseID(this.cId)
      .subscribe((response: Material[]) => {
        console.log('Files recievd', response);
        this.unprocessedFiles = response;
        // console.log('Files recived');
      });
  }

  base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  downloadFile(data, fileType) {
    const byteArray = this.base64ToArrayBuffer(data);
    const blob = new Blob([byteArray], { type: fileType });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  deleteTraining(fileId) {
    console.log('delete on ', fileId);
    if (confirm('You Sure want to delete the Training Material?')) {
      this.materialService.deleteMaterial(fileId).subscribe((response) => {
        console.log(response);
        this.ngOnInit();
      });
    }
  }
}

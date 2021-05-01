import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Material } from 'src/app/models/Material';
import { MaterialService } from 'src/app/services/materialService/material.service';

@Component({
  selector: 'app-version-detail',
  templateUrl: './version-detail.component.html',
  styleUrls: ['./version-detail.component.css'],
})
export class VersionDetailComponent implements OnInit {
  trainerId: number;
  courseId: number;
  versions: Material[];

  // expecting a number type injected to this component
  constructor(
    private materialService: MaterialService,
    private dialog: MatDialogRef<VersionDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.courseId = data.courseId;
  }

  ngOnInit(): void {
    this.trainerId = Number(localStorage.getItem('userId'));
    this.dialog.updateSize('80%', '80%');
    this.getMaterials();
  }

  getMaterials() {
    console.log('get maaterials from version');
    this.materialService
      .getMaterialsByCourseID(this.courseId)
      .subscribe((response: any) => {
        console.log(response);
        this.versions = response;
      });
  }

  onNoClick(): void {
    this.dialog.close();
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
}

import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trainer } from 'src/app/models/Trainer';
import { TrainerService } from 'src/app/services/trainerService/trainer.service';

@Component({
  selector: 'app-creator-operation-dialog',
  templateUrl: './creator-operation-dialog.component.html',
  styleUrls: ['./creator-operation-dialog.component.css'],
})
export class CreatorOperationDialogComponent implements OnInit {
  mode: string;
  cid: number;
  trainers: any;
  trainerToAdd: any = null;
  searchText: string;

  constructor(
    private trainerService: TrainerService,
    public dialogRef: MatDialogRef<CreatorOperationDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.cid = data.courseId;
    this.mode = data.mode;
    this.fetchTrainers();
  }

  fetchTrainers() {
    this.trainerService.getTrainerByCourseID(this.cid).subscribe((res) => {
      this.trainers = res;
    });
  }

  ngOnInit(): void {
    this.dialogRef.updateSize('60%', '60%');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getTrainer() {
    console.log('get traiener', this.searchText);
    this.trainerService.getTrainerByEmail(this.searchText).subscribe((res) => {
      this.trainerToAdd = res;
    });
  }

  assignTrainer(tid) {
    console.log('assgin ', tid);
    this.trainerService
      .addTrainerAfterCourse(tid, this.cid)
      .subscribe((response) => {
        console.log(response);
        alert('trainer added !');
        this.onNoClick();
      });
  }
  unassignTrainer(tid) {
    console.log('delete ', tid);
    this.trainerService.deleteTrainer(tid, this.cid).subscribe((res) => {
      alert('Trainer deleted !');
      this.onNoClick();
    });
  }
}

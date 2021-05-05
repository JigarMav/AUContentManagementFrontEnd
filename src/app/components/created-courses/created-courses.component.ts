import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { CreatorOperationDialogComponent } from '../creator-operation-dialog/creator-operation-dialog.component';

@Component({
  selector: 'app-created-courses',
  templateUrl: './created-courses.component.html',
  styleUrls: ['./created-courses.component.css'],
})
export class CreatedCoursesComponent implements OnInit {
  courses: Course[];
  trainerId: number;
  searchText: string;

  constructor(
    private courseService: CourseService,

    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('idToken')) {
      this.router.navigate(['/login']);
    }
    this.trainerId = Number(localStorage.getItem('userId'));
    this.getCourses();
  }

  public getCourses(): void {
    let creatorId = Number(localStorage.getItem('userId'));
    this.courseService.getCoursesForCreator(creatorId).subscribe(
      (response: Course[]) => {
        this.courses = response;
        console.log(this.courses);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openAddDialog(id) {
    console.log('for course ', id);
    this.dialog.open(CreatorOperationDialogComponent, {
      data: {
        courseId: id,
        mode: 'add',
      },
    });
  }
  openDeleteDialog(id) {
    console.log('for course ', id);
    this.dialog.open(CreatorOperationDialogComponent, {
      data: {
        courseId: id,
        mode: 'delete',
      },
    });
  }
  openViewDialog(id) {
    console.log('for course ', id);
    this.dialog.open(CreatorOperationDialogComponent, {
      data: {
        courseId: id,
        mode: 'view',
      },
    });
  }

  deleteCourse(id: number) {
    if (confirm('Are You Sure to delete the Course?')) {
      this.courseService.deleteCourse(id).subscribe((response) => {
        alert('Course Deleted Successfully');

        this.ngOnInit();
      });
    }
    // console.log(id);
  }
}

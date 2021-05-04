import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { FilesComponent } from '../files/files.component';

@Component({
  selector: 'app-trainer-courses',
  templateUrl: './trainer-courses.component.html',
  styleUrls: ['./trainer-courses.component.css'],
})
export class TrainerCoursesComponent implements OnInit {
  courses: Course[];
  trainerId: number;
  editCourse: Course;
  searchText: string;

  // deleteCourse: Course;
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
    let trainerid = Number(localStorage.getItem('userId'));
    this.courseService.getCoursesForTrainer(trainerid).subscribe(
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
    this.dialog.open(FileUploadComponent, {
      data: {
        courseId: id,
      },
    });
  }

  openDeleteDialog(id) {
    this.dialog.open(FilesComponent, {
      data: {
        courseId: id,
        mode: 'trainer',
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

  updateCourse(course: Course) {
    // this.editCourse = course;
    this.courseService.setCourseForEdit(course);
    console.log('clicked !goinggg from view ', course);
    this.router.navigate(['/updateCourse']);
    // this.msgToSib();
  }

  public searchEmployees(key: string): void {
    console.log(key);
  }
}

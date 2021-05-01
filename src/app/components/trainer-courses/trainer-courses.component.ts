import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';

@Component({
  selector: 'app-trainer-courses',
  templateUrl: './trainer-courses.component.html',
  styleUrls: ['./trainer-courses.component.css'],
})
export class TrainerCoursesComponent implements OnInit {
  courses: Course[];
  editCourse: Course;
  // deleteCourse: Course;
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('idToken')) {
      this.router.navigate(['/login']);
    }
    this.getCourses();
  }

  public getCourses(): void {
    let trainerid = Number(sessionStorage.getItem('userId'));
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

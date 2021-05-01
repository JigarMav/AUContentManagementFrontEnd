import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  // addForm = new FormGroup({
  //   courseID: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^[0-9]\d*$/),
  //     Validators.minLength(1),
  //     Validators.maxLength(3),
  //   ]),
  //   courseName: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z ]*'),
  //   ]),
  //   courseDesc: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z ]*'),
  //   ]),
  //   courseSkills: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z, ]*'),
  //   ]),
  //   coursePrerequisites: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z, ]*'),
  //   ]),
  //   courseLocation: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z ]*'),
  //   ]),
  // });

  editCourse: Course;
  editCourseId: number;
  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('idToken')) {
      this.router.navigate(['/login']);
    }

    this.editCourse = this.courseService.getCourseForEdit();
    this.editCourseId = this.editCourse.courseID;
    console.log(sessionStorage.getItem('userId'));
  }

  onUpdateCourse(course: Course) {
    console.log(
      'before update cc ',
      'course id',
      this.editCourseId,
      'course ',
      course
    );
    course.courseID = this.editCourseId;
    this.courseService.updatecourse(course).subscribe((response) => {
      this.router.navigate([`/courses/all`]);
    });
    // console.log(course);
  }
}

import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  // addForm = new FormGroup({
  //   courseName: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z ]*'),
  //   ]),
  //   courseDesc: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern("[a-zA-Z0-9' ]*"),
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

  currentCourse: Course;
  submitted = false;
  constructor(private router: Router, private courseService: CourseService) {}

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
    if (!localStorage.getItem('idToken')) {
      this.router.navigate(['/login']);
    }
    console.log(localStorage.getItem('userId'));
  }

  // addCourse() {
  //   this.courseService.addCourse(this.course).subscribe((response) => {
  //     alert('Course Added Successfully');
  //     /*this.snackBar.open("Course Added. ", " Success!", {
  //       duration: 2000,
  //     });*/
  //     this.router.navigate([`/courses/all`]);
  //   });
  // }
  onAddCourse(addForm: NgForm) {
    this.courseService.addCourse(addForm.value).subscribe((response) => {
      addForm.reset();
      this.router.navigate([`/courses/all`]);
    });
    console.log(addForm.value);
  }

  onUpdateCourse(course: Course) {
    this.courseService.updatecourse(course).subscribe((response) => {
      this.router.navigate([`/courses/all`]);
    });
    console.log(course);
  }
}

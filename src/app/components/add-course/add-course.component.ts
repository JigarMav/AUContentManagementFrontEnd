import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { NgForm } from '@angular/forms';
import { TrainerService } from 'src/app/services/trainerService/trainer.service';

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
  constructor(
    private router: Router,
    private courseService: CourseService,
    private trainerService: TrainerService
  ) {}

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
    const creator = Number(localStorage.getItem('userId'));

    const obj = addForm.value;

    const courseName = obj['courseName'];
    const courseDesc = obj['courseDesc'];
    const courseLocation = obj['courseLocation'];
    const coursePrerequisites = obj['coursePrerequisites'];
    const courseSkills = obj['courseSkills'];

    console.log(obj);
    const course = new Course(
      creator,
      courseName,
      courseDesc,
      courseSkills,
      coursePrerequisites,
      courseLocation
    );
    console.log(course, courseLocation);

    this.courseService.addCourse(course).subscribe((response: Course) => {
      console.log('af add', response);

      // let tid = localStorage.getItem('userId');
      this.trainerService
        .addTrainerAfterCourse(creator, response.courseID)
        .subscribe();
      // make user a trainer
      localStorage.setItem('isTrainer', 'true');
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

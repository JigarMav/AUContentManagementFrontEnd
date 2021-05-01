import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { VersionDetailComponent } from '../version-detail/version-detail.component';

@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.component.html',
  styleUrls: ['./view-all-courses.component.css'],
})
export class ViewAllCoursesComponent implements OnInit {
  courses: Course[] = [];
  // editCourse: Course;

  // columns displayed in this fashion.
  displayedColumns: string[] = [
    'name',
    'location',
    'description',
    'prerequisites',
    'skills',
    'trainer',
    'version',
  ];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('idToken')) {
      this.router.navigate(['/login']);
    }
    this.fetchAllCourses();
  }
  public fetchAllCourses() {
    this.courseService.getAllCourses().subscribe((response: Course[]) => {
      console.log(response);
      this.courses = response;
    });
  }

  getVersionDialog(id: number) {
    this.dialog.open(VersionDetailComponent, {
      data: {
        courseId: id,
      },
    });
  }
  // deleteCourse(id: number) {
  //   if (confirm('Are You Sure to delete the Course?')) {
  //     this.courseService.deleteCourse(id).subscribe((response) => {
  //       alert('Course Deleted Successfully');

  //       this.ngOnInit();
  //     });
  //   }
  //   // console.log(id);
  // }

  // updateCourse(course: Course) {
  //   // this.editCourse = course;
  //   this.courseService.setCourseForEdit(course);
  //   console.log('clicked !goinggg from view ', course);
  //   this.router.navigate(['/updateCourse']);
  //   // this.msgToSib();
  // }
}

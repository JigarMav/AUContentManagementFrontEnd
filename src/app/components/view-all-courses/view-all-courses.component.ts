import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { SubscriptionService } from 'src/app/services/subscriptionService/subscription.service';
import { VersionDetailComponent } from '../version-detail/version-detail.component';
import { Subscription } from 'src/app/models/Subscription';

@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.component.html',
  styleUrls: ['./view-all-courses.component.css'],
})
export class ViewAllCoursesComponent implements OnInit {
  courses: Course[] = [];
  subCourses: Course[] = [];
  uid: number;

  // editCourse: Course;
  nonSubCourses: Course[] = [];
  searchText: string;

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
    private dialog: MatDialog,
    private subService: SubscriptionService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('idToken')) {
      this.router.navigate(['/login']);
    }
    this.uid = Number(localStorage.getItem('userId'));
    console.log('window ', window);
    this.fetchAllCourses();
  }

  public fetchAllCourses() {
    console.log('isT', localStorage.getItem('isTrainer'));
    this.courseService.getAllCourses().subscribe((response: Course[]) => {
      console.log('all courses ', response);
      this.courses = response;
      this.fetchAllSubscribedCourses();
    });
  }

  public fetchAllSubscribedCourses() {
    this.courseService
      .getCoursesBySubscription(this.uid)
      .subscribe((response: Course[]) => {
        // console.log(response);

        this.subCourses = response;
        console.log('sub courses ', this.subCourses);
        this.displayCourses();
      });
  }

  displayCourses() {
    const full = this.courses;
    const sub = this.subCourses;
    for (let i = full.length - 1; i >= 0; i--) {
      for (let j = 0; j < sub.length; j++) {
        if (full[i] && full[i].courseID === sub[j].courseID) {
          // console.log(' sub ', full[i]);
          full.splice(i, 1);
        }
      }
    }
    this.nonSubCourses = full;
    console.log('displayed courses ', full);
  }
  getVersionDialog(id: number) {
    this.dialog.open(VersionDetailComponent, {
      data: {
        courseId: id,
      },
    });
  }

  subscribeCourse(cid: number) {
    const uid = Number(localStorage.getItem('userId'));
    const uemail = localStorage.getItem('userEmail');
    const sub: Subscription = new Subscription(uid, cid, uemail);
    console.log(sub);
    this.subService.addSubscription(sub).subscribe((response) => {
      console.log('sub added ! for user', uid);
      this.fetchAllCourses();
    });
  }
}

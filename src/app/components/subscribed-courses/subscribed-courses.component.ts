import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/courseService/course.service';
import { SubscriptionService } from 'src/app/services/subscriptionService/subscription.service';
import { FilesComponent } from '../files/files.component';

@Component({
  selector: 'app-subscribed-courses',
  templateUrl: './subscribed-courses.component.html',
  styleUrls: ['./subscribed-courses.component.css'],
})
export class SubscribedCoursesComponent implements OnInit {
  courses: Course[] = [];
  uid: number = Number(localStorage.getItem('userId'));
  searchText: string;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private subService: SubscriptionService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('idToken')) {
      this.router.navigate(['/login']);
    }
    this.fetchAllCourses();
  }
  public fetchAllCourses() {
    this.courseService
      .getCoursesBySubscription(this.uid)
      .subscribe((response: Course[]) => {
        console.log(response);
        this.courses = response;
      });
  }
  refresh(): void {
    window.location.reload();
  }
  unSubscribe(cid) {
    console.log('called for course', cid);
    this.subService.deleteSubscription(this.uid, cid).subscribe((res) => {
      console.log(res);
      this.fetchAllCourses();
    });
  }
  openViewDialog(id) {
    this.dialog.open(FilesComponent, {
      data: {
        courseId: id,
        mode: 'user',
      },
    });
    console.log(id);
  }
}

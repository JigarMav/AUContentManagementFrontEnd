import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course';
import { Trainer } from 'src/app/models/Trainer';
import { environment } from 'src/environments/environment';
import { TrainerService } from '../trainerService/trainer.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = environment.baseUrl;
  trainer: Trainer = {} as Trainer;
  editCourse: Course = {} as Course;

  constructor(
    private http: HttpClient,
    private trainerService: TrainerService
  ) {}

  public getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + '/course/');
  }
  getCoursesForTrainer(id: number) {
    return this.http.get<Course[]>(this.baseUrl + `/course/trainer/${id}`);
  }

  getCoursesBySubscription(id: number) {
    return this.http.get<Course[]>(this.baseUrl + `/course/user/${id}`);
  }
  public addCourse(course: Course) {
    return this.http.post(this.baseUrl + '/course/add', course);
  }
  public setCourseForEdit(course: Course) {
    this.editCourse = course;
  }
  public getCourseForEdit() {
    const temp = this.editCourse;
    this.editCourse = {} as Course;
    return temp;
  }
  public deleteCourse(id: number) {
    return this.http.delete(this.baseUrl + `/course/delete/${id}`);
  }

  public updatecourse(course: Course) {
    return this.http.put(this.baseUrl + '/course/update', course);
  }

  public getCourseByName(name: String) {
    return this.http.get(this.baseUrl + '/course/' + name);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = environment.baseUrl;
  editCourse: Course = {} as Course;

  constructor(private http: HttpClient) {}

  public getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl + '/course/');
  }
  getCoursesForTrainer(id: number) {
    return this.http.get<Course[]>(this.baseUrl + `/course/trainer/${id}`);
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { LoginComponent } from './components/login/login.component';
import { TrainerCoursesComponent } from './components/trainer-courses/trainer-courses.component';
import { TrendsComponent } from './components/trends/trends.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { ViewAllCoursesComponent } from './components/view-all-courses/view-all-courses.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses/all', component: ViewAllCoursesComponent },
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'updateCourse', component: UpdateCourseComponent },
  { path: 'trainers', component: TrainerCoursesComponent },
  { path: 'trends', component: TrendsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

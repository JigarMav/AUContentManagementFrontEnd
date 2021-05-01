import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ViewAllCoursesComponent } from './components/view-all-courses/view-all-courses.component';

import { FormsModule } from '@angular/forms';
import { TrainerCoursesComponent } from './components/trainer-courses/trainer-courses.component';
import { SubscribedCoursesComponent } from './components/subscribed-courses/subscribed-courses.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { TrendsComponent } from './components/trends/trends.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ViewAllCoursesComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    TrainerCoursesComponent,
    SubscribedCoursesComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    TrendsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '959295765078-2vmq7tqq8un842q61isk8vjcmoeis1b5.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

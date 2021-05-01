import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SessionStorageService } from 'angular-web-storage';

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

// material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FilesComponent } from './components/files/files.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VersionDetailComponent } from './components/version-detail/version-detail.component';

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
    FileUploadComponent,
    FilesComponent,
    PageNotFoundComponent,
    VersionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    ChartsModule,

    // material
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
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

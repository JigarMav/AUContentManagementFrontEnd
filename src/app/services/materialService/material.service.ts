import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  user: User;
  private baseUrl = environment.baseUrl + '/material';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  httpClient: any;
  baseURL: string;
  constructor(private http: HttpClient, private loginService: LoginService) {}

  getMaterialActive() {
    return this.http.get(this.baseUrl + '/active');
  }

  getAllMaterial() {
    return this.http.get(this.baseUrl + '/');
  }

  deleteMaterial(materialId: any) {
    return this.http.delete(this.baseUrl + '/delete/' + materialId);
  }

  addTrainingMaterial(fileList, courseId, trainerId) {
    console.log('ff ', fileList);

    console.log('course and trainer', courseId.courseId, trainerId);
    console.log(localStorage.getItem('userId'));
    const formData: FormData = new FormData();

    // for (const obj of fileList) {
    //   formData.append('file', obj);
    // }

    formData.append('file', fileList[0]);
    formData.append('courseId', courseId.courseId);
    formData.append('trainerId', trainerId);
    formData.append('trainerName', localStorage.getItem('userName'));
    console.log(localStorage.getItem('userName'));

    return this.http.post(this.baseUrl + `/add`, formData, {
      responseType: 'text',
    });
  }

  getActiveMaterialByCourseID(id: number) {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  getMaterialsByCourseID(id: number) {
    return this.http.get(`http://localhost:8080/api/material/course/all/${id}`);
  }

  handleErrors(error: HttpErrorResponse) {
    console.log('materialService Http Error', error.message);
    return throwError(error);
  }
}

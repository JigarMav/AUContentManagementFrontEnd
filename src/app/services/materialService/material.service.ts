import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private baseUrl = environment.baseUrl + '/material';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  getMaterialActive() {
    return this.http.get(this.baseUrl + '/active');
  }

  getAllMaterial() {
    return this.http.get(this.baseUrl + '/');
  }

  deleteMaterial(materialId: any) {
    return this.http.delete(this.baseUrl + '/delete/' + materialId);
  }

  // add training materials

  addTrainingMaterial(fileList, courseId, trainerId) {
    console.log('ff ', fileList);

    console.log('course and trainer', courseId.courseId, trainerId);
    console.log(sessionStorage.getItem('userID'));
    const formData: FormData = new FormData();

    // for (const obj of fileList) {
    //   formData.append('file', obj);
    // }

    formData.append('file', fileList[0]);
    formData.append('courseId', courseId.courseId);
    formData.append('trainerId', trainerId);
    // formData.forEach((d) => console.log(d));
    // const headers = { headers: new HttpHeaders({ enctype: 'multipart/form-data', responseType: 'text' }) };
    // return new Observable<void>();
    return this.http.post(this.baseUrl + `/add`, formData, {
      responseType: 'text',
    });
  }

  // addMaterial(formData: any) {
  //   let headers = {
  //     headers: new HttpHeaders({ enctype: 'multipart/form-data' }),
  //   };
  //   return this.http.post(this.baseUrl + '/add', formData, headers).subscribe();
  // }

  getMaterialByCourseID(id: number) {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  handleErrors(error: HttpErrorResponse) {
    console.log('materialService Http Error', error.message);
    return throwError(error);
  }
}

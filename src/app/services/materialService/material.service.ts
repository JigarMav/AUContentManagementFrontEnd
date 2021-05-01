import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
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

  addMaterial(formData: any) {
    let headers = {
      headers: new HttpHeaders({ enctype: 'multipart/form-data' }),
    };
    return this.http.post(this.baseUrl + '/add', formData, headers).subscribe();
  }

  getMaterialByCourseID(id: number) {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  handleErrors(error: HttpErrorResponse) {
    console.log('materialService Http Error', error.message);
    return throwError(error);
  }
}

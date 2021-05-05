import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from 'src/app/models/Trainer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private root = environment.baseUrl;
  private baseUrl = environment.baseUrl + '/trainer';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  getAllTrainers() {
    return this.http.get(this.baseUrl + '/');
  }

  getAllUsers() {
    return this.http.get('http://localhost:8080/api/user/');
  }

  addTrainer(trainer: Trainer) {
    return this.http.post(this.baseUrl + '/add', trainer);
  }

  addTrainerAfterCourse(tid: any, cid: any) {
    console.log('adfc ', tid, cid);
    const formData: FormData = new FormData();
    formData.append('tid', tid);
    formData.append('cid', cid);
    return this.http.post(this.baseUrl + '/add/afterCourse', formData, {
      responseType: 'text',
    });
  }

  getTrainerByTrainerID(id: number) {
    return this.http.get(this.baseUrl + `/select/${id}`);
  }
  getTrainerByCourseID(id: number) {
    return this.http.get(this.baseUrl + `/${id}`);
  }
  getTrainerByEmail(email: string) {
    return this.http.get(this.root + '/user/' + email);
  }

  deleteTrainer(uid: number, cid: number) {
    return this.http.delete(this.baseUrl + '/delete/' + uid + '/' + cid);
  }
}

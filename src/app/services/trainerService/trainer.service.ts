import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from 'src/app/models/Trainer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
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

  getTrainerByCourseID(id: number) {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  deleteTrainer(trainerID: number, courseID: number) {
    return this.http.delete(
      this.baseUrl + '/delete/' + trainerID + '/' + courseID
    );
  }
}

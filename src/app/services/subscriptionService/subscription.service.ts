import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'src/app/models/Subscription';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private baseUrl = environment.baseUrl + '/subscription';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  getAllSubscriptions() {
    return this.http.get<Subscription[]>(this.baseUrl + '/all');
  }
  addSubscription(sub: Subscription) {
    console.log('add service', sub);
    return this.http.post(this.baseUrl + '/add', sub);
  }
  getSubscriptionByCourseID(id) {
    return this.http.get(this.baseUrl + '/all' + id);
  }

  deleteSubscription(uid, cid) {
    console.log('delete sv', uid, cid);
    return this.http.delete(this.baseUrl + '/delete/' + uid + '/' + cid);
  }
}

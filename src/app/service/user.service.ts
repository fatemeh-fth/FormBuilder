import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(environment.baseUrl, data)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginFormInterface } from '../auth/models/login-form.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl= environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(loginForm: LoginFormInterface) {
    return this.http.post(this.baseUrl + 'login', loginForm);
  }

  register(loginForm: LoginFormInterface) {
    return this.http.post(this.baseUrl + 'register', loginForm);
  }

  getUserData(userId: string) {
    return this.http.get<LoginFormInterface>(this.baseUrl + '600/users/' + userId);
  }

  updateUser(userId: string, userData: LoginFormInterface) {
    return this.http.patch<any>(this.baseUrl + '600/users/' + userId, {...userData} );
  }

  getUserId() {
    return this.http.get<any>(this.baseUrl);
  }


}

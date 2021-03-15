import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginFormInterface, RegisterFormInterface } from '../auth/models/login-form.model';
import { BookInterface } from '../main/models/book.model';
import { UserInterface } from '../main/models/user.model';


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

  register(loginForm: RegisterFormInterface) {
    return this.http.post(this.baseUrl + 'register', loginForm);
  }

  getUserData(userId: string) {
    return this.http.get<UserInterface>(this.baseUrl + '660/users/' + userId);
  }

  updateUser(userId: string, userData: UserInterface) {
    return this.http.patch<any>(this.baseUrl + '600/users/' + userId, {...userData} );
  }

  getAllBooks() {
    return this.http.get<BookInterface[]>(this.baseUrl + '660/books');
  }

  getBookData(bookId: number) {
    return this.http.get<BookInterface>(this.baseUrl + '660/books/' + bookId);
  }

  addBook(bookData: BookInterface) {
    return this.http.post<BookInterface>(this.baseUrl + '660/books', {...bookData} );
  }

  updateBook(bookId: number, bookData: BookInterface) {
    return this.http.patch<any>(this.baseUrl + '660/books/' + bookId, {...bookData});
  }

  deleteBook(bookId: number) {
    return this.http.delete(this.baseUrl + '660/books/' + bookId);
  }

  getFilteredUsersData(userIds: string[]) {
    let params = new HttpParams();
    userIds.forEach(id => {
      params = params.append('id', id)
    })
    return this.http.get<any>(this.baseUrl + '660/users' , {params: params});
  }

}

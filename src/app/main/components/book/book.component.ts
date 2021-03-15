import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { BookInterface } from '../../models/book.model';
import { BookDataInterface } from '../../models/booking-data.model';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [MessageService]
})
export class BookComponent implements OnInit {

  books: BookInterface[];

  private userId: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.apiService.getAllBooks().subscribe((booksList) =>
      this.books = booksList
    );
  }

  editBook(bookId: number) {
    this.router.navigate(['editBook', +bookId]);
  }

  historyBook(bookId: number) {
    this.router.navigate(['historyBook', +bookId]);
  }

  addBook() {
    this.router.navigate(['newBook']);
  }

  booking(bookId: number) {
    let currentUser: BookDataInterface = {
      bookingBy: this.userId,
      bookingDate: new Date,
    }
    let updateBook: BookInterface = this.books.find(bookingBook =>
      bookingBook.id === bookId
    );
    if (!updateBook.bookingData) {
      updateBook = Object.assign(updateBook, {"bookingData": [currentUser]})
    } else {
      updateBook.bookingData.push(currentUser);
    }
    this.apiService.updateBook(bookId, updateBook).subscribe(fff =>
      console.log(fff)
    );
  }


}

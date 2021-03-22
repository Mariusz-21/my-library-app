import { Component, OnInit } from '@angular/core';
import { BookInterface } from 'src/app/main/models/book.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booked-book',
  templateUrl: './booked-book.component.html',
  styleUrls: ['./booked-book.component.scss']
})
export class BookedBookComponent implements OnInit {

  books: BookInterface[];
  private userId: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getBooks();
  }

  getBooks(): void {
    this.apiService.getAllBooks().subscribe((booksList: BookInterface[]) => {
      this.books = booksList;
      this.books = this.books.filter(bookedBooks => {
         return bookedBooks.currentlyBooked?.bookingBy === this.userId
       })
      }
    );
  }

  returnBook(bookId: number): void {
    let updateBook: BookInterface = this.books.find(returnBook =>
      returnBook.id === bookId
    );
    updateBook.currentlyBooked = null;
    this.apiService.updateBook(bookId, updateBook).subscribe(() =>
      this.getBooks()
    );
  }
}

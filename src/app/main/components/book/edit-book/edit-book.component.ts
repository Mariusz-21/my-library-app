import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
  providers: [MessageService]
})
export class EditBookComponent implements OnInit {

  bookform: FormGroup;

  private userId: string;
  private bookId: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.bookId = this.route.snapshot.params['id'];
    this.apiService.getBookData(+this.bookId).subscribe(bookdata => {
      this.bookform = this.fb.group({
        title: bookdata.title,
        author: bookdata.author,
        createdBy: bookdata.createdBy,
        updatedBy: this.userId,
      });
    });
  }

  updateBook() {
    this.apiService.updateBook(+this.bookId, this.bookform.value).subscribe(fff => {
      console.log(fff);
      this.router.navigate(['book']);
    },error => {
      console.log(error.message)
    }
    );
  }

  deleteBook() {
    this.apiService.deleteBook(+this.bookId).subscribe(fff => {
      console.log(fff);
      this.router.navigate(['book']);
    },error => {
      console.log(error.message)
    }
    );
  }

  cancel() {
    this.router.navigate(['book']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
  providers: [MessageService]
})
export class NewBookComponent implements OnInit {


  bookform: FormGroup;
  private userId: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    this.bookform = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      createdBy: this.userId,
      currentlyBooked: null
    });
  }

  addBook() {
    this.apiService.addBook(this.bookform.value).subscribe(fff => {
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

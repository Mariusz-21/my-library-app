import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginFormInterface } from 'src/app/auth/models/login-form.model';
import { BookInterface } from 'src/app/main/models/book.model';
import { BookDataInterface } from 'src/app/main/models/booking-data.model';
import { UserInterface } from 'src/app/main/models/user.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-history-book',
  templateUrl: './history-book.component.html',
  styleUrls: ['./history-book.component.scss'],
  providers: [MessageService]
})
export class HistoryBookComponent implements OnInit {

  bookForm: FormGroup;
  bookHistory: any[];
  books: BookInterface;
  book: BookInterface;
  createUser: UserInterface;
  updateUser: UserInterface;

  private bookId: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
    this.apiService.getBookData(+this.bookId).subscribe(book => {
      this.book = book;
      console.log(book);


      // let userBookingDate =  bookdata.bookingData.map(({bookingDate}) => bookingDate);
      const userIds = book.bookingData.map(({bookingBy}) => bookingBy);


      this.apiService.getFilteredUsersData(userIds).subscribe((users: UserInterface[]) => {
         this.bookHistory = book.bookingData.map((bookData: BookDataInterface)=> {
          const userFound = users.find(user => user.id === +bookData.bookingBy);
          return {...bookData, ...userFound}
        })
        console.log(this.bookHistory)
      })


      this.apiService.getUserData(this.book.createdBy).subscribe(createUser => {
        this.createUser = createUser;
      }, error => {
        console.log(error.message)
      });
      this.apiService.getUserData(this.book.updatedBy).subscribe(updateUser => {
        this.updateUser = updateUser;
      }, error => {
        console.log(error.message)
      });


    });
  }

  back() {
    console.log('back back back');
    this.router.navigate(['book']);
  }

}

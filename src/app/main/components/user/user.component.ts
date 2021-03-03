import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {

  ageValue: number;
  newform: FormGroup;
  userData: any;
  private userId: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.apiService.getUserData(this.userId).subscribe(userdata => {
      this.userData = userdata;

      this.newform = this.fb.group({
        email: userdata.email,
        firstname: userdata.firstname,
        lastname: userdata.lastname
      });
    });
  }

  update() {
    this.apiService.updateUser(this.userId, this.newform.value).subscribe(fff => {
      console.log(fff);
    },error => {
      console.log(error.message)
    }
    );
  }

  cancel() {
    this.router.navigate(['book']);
  }
}

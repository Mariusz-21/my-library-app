import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import jwt_decode  from "jwt-decode";
import { ApiService } from 'src/app/services/api.service';
import { AuthInterface } from '../../models/auth.model';
import { TokenInterface } from '../../models/token.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  form = this.prepareForm();
  private userId: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  private prepareForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    })
  }

  register(): void {
    this.apiService.register(this.form.value).subscribe((resp: AuthInterface) => {
      localStorage.setItem('auth', resp.accessToken);
      console.log(resp.accessToken);
      this.router.navigate(['book']);

      var token = resp.accessToken;
      var decode: TokenInterface = jwt_decode(token);

      this.userId = decode.sub;
      localStorage.setItem('userId', this.userId)
    },
    error => {
      console.log(error)
    }
    );
  }

  cancelRegister(): void {
    this.router.navigate(['auth/login']);
  }
}

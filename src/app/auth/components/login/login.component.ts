import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { AuthInterface } from '../../models/auth.model';
import jwt_decode  from "jwt-decode";
import { TokenInterface } from '../../models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  form = this.prepareForm();
  authorized: boolean = false;
  private userId: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  private prepareForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  login(): void {
    this.apiService.login(this.form.value).subscribe((resp: AuthInterface) => {
      localStorage.setItem('auth', resp.accessToken)
      this.router.navigate(['book']);
      this.authorized = true;

      var token = resp.accessToken;
      var decode: TokenInterface = jwt_decode(token);

      this.userId = decode.sub;
      localStorage.setItem('userId', this.userId)
    },
    error => {
      console.log(error.message)
    }
    );
  }

  register(): void {
    this.router.navigate(['auth/register']);
  }
}

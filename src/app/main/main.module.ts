import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './components/book/book.component';
import { UserComponent } from './components/user/user.component';
import { SharedModule } from '../shared/shared.module';
import {InputNumberModule} from 'primeng/inputnumber';


const routes: Routes = [
  {
    path: 'book', component: BookComponent
  },
  {
    path: 'user', component: UserComponent
  }
]

@NgModule({
  declarations: [
    BookComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    InputNumberModule
  ]
})
export class MainModule { }

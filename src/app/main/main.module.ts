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
import {TableModule} from 'primeng/table';
import { NewBookComponent } from './components/book/new-book/new-book.component';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { HistoryBookComponent } from './components/book/history-book/history-book.component';
import { CardModule } from 'primeng/card';
import { BookedBookComponent } from './components/user/booked-book/booked-book.component';



const routes: Routes = [
  {
    path: 'book', component: BookComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'bookedBook', component: BookedBookComponent
  },
  {
    path: 'newBook', component: NewBookComponent
  },
  {
    path: 'editBook/:id', component: EditBookComponent
  },
  {
    path: 'historyBook/:id', component: HistoryBookComponent
  }
]

@NgModule({
  declarations: [
    BookComponent,
    UserComponent,
    NewBookComponent,
    EditBookComponent,
    HistoryBookComponent,
    BookedBookComponent
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
    InputNumberModule,
    TableModule,
    CardModule
  ]
})
export class MainModule { }

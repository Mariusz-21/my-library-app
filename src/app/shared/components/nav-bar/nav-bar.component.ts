import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MenuItem} from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[];
  authorized: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    router.events.subscribe( () => {
      this.authorized = !!localStorage.getItem('auth');
    })
   }

  ngOnInit(): void {

    this.items = [
      {label: 'Book', icon: 'pi pi-fw pi-book', command: () => this.router.navigate(['book'])},
      {label: 'User', icon: 'pi pi-fw pi-user', command: () => this.router.navigate(['user'])}
    ];
  }

  logout(): void {
      localStorage.removeItem('auth');
      localStorage.removeItem('userId');
      this.router.navigate(['auth/login']);
      this.authorized = false;
  }
}

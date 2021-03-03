import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    ButtonModule,
    MenubarModule,
    MegaMenuModule,
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }

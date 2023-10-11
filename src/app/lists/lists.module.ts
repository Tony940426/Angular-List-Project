import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    ListHomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule
  ]
})
export class ListsModule { }

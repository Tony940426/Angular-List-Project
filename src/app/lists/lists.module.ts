import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListHomeComponent } from './list-home/list-home.component';


@NgModule({
  declarations: [
    ListHomeComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule
  ]
})
export class ListsModule { }

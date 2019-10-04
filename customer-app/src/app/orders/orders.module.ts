import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../material/angular-material.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class OrdersModule { }

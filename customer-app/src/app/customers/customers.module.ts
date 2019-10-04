import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../material/angular-material.module';
import { SearchByNamePipe } from '../shared/pipe/search-by-name.pipe';




@NgModule({
  declarations: [
    CustomersComponent,
    SearchByNamePipe
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    AngularMaterialModule
    ]
})
export class CustomersModule { }

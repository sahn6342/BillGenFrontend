import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class InvoiceModule { }

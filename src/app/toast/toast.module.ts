import { FormsModule } from '@angular/forms';
import { ToastRoutingModule } from './toast-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    ToastComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastRoutingModule
  ]
})
export class ToastModule { }

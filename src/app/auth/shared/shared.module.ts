import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ]
})

export class SharedModule {}

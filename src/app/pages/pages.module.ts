
import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { SimpleFormComponent } from './forms/simple-form.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule,
    ReactiveFormsModule, UiModule],
  exports: [],
  declarations: [HomeComponent, SimpleFormComponent]
})
export class PagesModule { }

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { SimpleFormComponent } from './forms/simple-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [UiModule],
  exports: [],
  declarations: [HomeComponent, SimpleFormComponent]
})
export class PagesModule { }

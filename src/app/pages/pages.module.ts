import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { SimpleFormComponent } from './forms/simple-form.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './forms/custom.pipe';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, UiModule, TranslateModule],
  exports: [],
  declarations: [HomeComponent, SimpleFormComponent, CustomPipe],
})
export class PagesModule {}

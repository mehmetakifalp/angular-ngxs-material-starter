import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { OrderFormComponent } from './forms/order.form.component';

@NgModule({
  imports: [UiModule],
  exports: [],
  declarations: [OrderFormComponent]
})
export class PagesModule { }

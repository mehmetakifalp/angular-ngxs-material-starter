import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: 'simple-form.component.html',
  styles: [`.example-container {
    display: flex;
    flex-direction: column;
  }
  
  .example-container > * {
    width: 100%;
  }
  
  .example-container form {
    margin-bottom: 20px;
  }
  
  .example-container form > * {
    margin: 5px 0;
  }
  
  .example-container .mat-radio-button {
    margin: 0 5px;
  }
  `]
})
export class SimpleFormComponent {



  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }



}

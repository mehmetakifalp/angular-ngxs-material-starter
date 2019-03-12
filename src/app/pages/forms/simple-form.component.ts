import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SaveActionForSimpleForm } from '../../store/action/simple.form.action';
import { of } from 'rxjs';

@Component({
  selector: 'app-simple-form',
  templateUrl: 'simple-form.component.html',
  styles: [
    `
      .example-container {
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
    `,
  ],
})
export class SimpleFormComponent implements OnInit {
  firstObservable$ = of(['1', '2', 3, 4, 5, 6, 7, 8]);

  options: FormGroup;

  constructor(fb: FormBuilder, private store: Store) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {}

  saveForm() {
    alert();
    this.store.dispatch(new SaveActionForSimpleForm('test'));
  }
}

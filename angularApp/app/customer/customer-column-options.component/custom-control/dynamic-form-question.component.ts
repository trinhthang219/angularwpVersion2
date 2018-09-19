import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { CustomerBase }     from '../../shared/customer-models/definition.base';
@Component({
  selector: 'app-column',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() column: CustomerBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.column.key].valid; }
}
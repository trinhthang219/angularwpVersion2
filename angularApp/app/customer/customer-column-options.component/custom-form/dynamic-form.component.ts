import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

// import { QuestionBase }              from '../custom-form-services/question-base';
// import { QuestionControlService }    from '../custom-form-services/question-control.service';

import { CustomerBase } from '../../shared/customer-models/definition.base';
import { CustomerServices } from '../../shared/customer-services/customer.services';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ CustomerServices ]
})
export class DynamicFormComponent implements OnInit {

  @Input() customerColumns: CustomerBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: CustomerServices) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.customerColumns);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
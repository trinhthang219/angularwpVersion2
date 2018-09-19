import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerServices } from '../shared/customer-services/customer.services'
@Component({
  selector: 'app-customer-column-options',
  templateUrl: './customer-column-options.component.html',
  styleUrls: ['./customer-column-options.component.scss'],
  providers:  [CustomerServices]
})

export class CustomerColumnOptionsComponent implements OnInit {
  customerColumns: any[];
  ngOnInit() {

  }
  constructor(service: CustomerServices) {
    this.customerColumns = service.getColumnMetaData();
  }
}
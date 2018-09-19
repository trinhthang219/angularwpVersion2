import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-customer-column-options',       
    templateUrl: './customer-column-options.component.html',
    styleUrls: ['./customer-column-options.component.scss']
  })
  
  export class CustomerColumnOptionsComponent implements OnInit {
    invoiceForm: FormGroup;

    constructor(
      private _fb: FormBuilder
    ) {
      this.createForm();
    }
  
    createForm(){
      this.invoiceForm = this._fb.group({
        itemRows: this._fb.array([])
      });
      this.invoiceForm.setControl('itemRows', this._fb.array([]));
    }
  
    get itemRows(): FormArray {
      return this.invoiceForm.get('itemRows') as FormArray;
    }
  
    addNewRow() {
      // control refers to your formarray
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      // add new formgroup
      control.push(this.initItemRows());
  }
  
  deleteRow(index: number) {
      // control refers to your formarray
      const control = <FormArray>this.invoiceForm.controls['itemRows'];
      // remove the chosen row
      control.removeAt(index);
  }
    initItemRows() {
        return this._fb.group({
            // list all your form controls here, which belongs to your form array
            itemname: ['']
        });
    }
    ngOnInit() {
        this.invoiceForm = this._fb.group({
          itemRows: this._fb.array([this.initItemRows()]) // here
        });
      }
  }
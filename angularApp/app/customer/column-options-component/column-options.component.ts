import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ColumnOptionsServices } from './shared/control-services/columnOptions.services';
import { DropdownColumnOption } from './shared/control-definition/dropdown.field';
import { ControlBase } from './shared/control-definition/base.field';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-column-options',
  templateUrl: './column-options.component.html',
  styleUrls: ['./column-options.component.scss'],
  providers: [ColumnOptionsServices]
})

export class CustomerColumnOptionsComponent implements OnInit {
  @Input() activeColumns: any[];
  @Input() allColumns: any[];
  @Output() columnSorted: any[];
  @Output() columnOptionsChange = new EventEmitter<any>();
  @Output() closeColumnPanel = new EventEmitter<boolean>();
  columnMetadata: any[];
  columnActiveBase: any[];
  form: FormGroup;
  formdata = '';
  // private columnsControl: ControlBase<any>[] = [];
  private groupControl: any = {};
  constructor(private services: ColumnOptionsServices) {
    console.log(this.services);
  }
  public closePanel() {
    this.closeColumnPanel.emit(true);
  }
  public addNewRow() {
    let numberOfControl = this.columnMetadata.length;
    let newKey = 'column' + numberOfControl.toString();
    let newName = 'column name' + numberOfControl.toString();
    let dropdownObject = new DropdownColumnOption({
      key: newKey,
      label: newName,
      options: this.allColumns,
      required: true,
      order: numberOfControl,
      value: this.allColumns[0]
    })
    this.columnMetadata.push(dropdownObject);
    let controlToAdd: any;
    controlToAdd = new FormControl(dropdownObject.value || '', Validators.required);
    this.form.addControl(newKey, controlToAdd);
  }

  public deleteRow(key: string, i: number) {
    // for(var i = 0 ; i < this.columnMetadata.length ;  i ++ ){
    //   if(this.columnMetadata[i].key =  key){
    //     this.columnMetadata.splice(i);
    //   }
    // }
    if (i >= 0) {
      this.columnMetadata.splice(i, 1);
    }
    if (this.form.controls[key]) {
      delete this.form.controls[key];
    }
    if (this.form.value[key]) {
      delete this.form.value[key];
    }
  }

  public initColumns(): ControlBase<any>[] {
    let arrayControls: ControlBase<any>[] = [];
    for (let i = 0; i < this.activeColumns.length; i++) {
      let control = new DropdownColumnOption({
        key: 'column' + i.toString(),
        label: 'column name ' + i.toString(),
        options: Object.assign([], this.allColumns),
        required: true,
        order: i,
        value: this.activeColumns[i]
      });
      arrayControls.push(control)
    }
    return arrayControls.sort((a, b) => a.order - b.order);
  }

  public toFormGroup(columns: ControlBase<any>[]) {
    columns.forEach(column => {
      this.groupControl[column.key] = column.required ?
        new FormControl(column.value || '', Validators.required)
        : new FormControl(column.value || '');
    });
    console.log(this.groupControl);
    return new FormGroup(this.groupControl);
  }

  public revert() {
    this.form.reset();
    let length = Object.keys(this.form.controls).length;
    for (let i = 0; i < length; i++) {
      this.form.removeControl('column' + i);
    }
    this.activeColumns = Object.assign([], this.columnActiveBase);
    this.columnMetadata = this.initColumns();
    this.form = this.toFormGroup(this.columnMetadata);
  }
  public ngOnInit() {
    this.columnActiveBase = Object.assign([], this.activeColumns);
    this.columnMetadata = this.initColumns();
    this.form = this.toFormGroup(this.columnMetadata);
  }
  public onSubmit() {
    // this.formdata = JSON.stringify(this.form.value);
    this.columnSorted = Object.keys(this.form.value).map(key => this.form.value[key]).map(x => x);
    //Object.assign([], this.activeColumns);
    this.columnOptionsChange.emit(this.columnSorted);
    // this.columnSorted = 
    console.log(this.form.value);
    // console.log(this.form.valid);
  }
}

import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../shared/control-definition/base.field';
@Component({
  selector: 'app-column',
  templateUrl: './column-options-row.component.html',
  styleUrls: ['./column-options-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColumnOptionsRowComponent {
  @Input() column: ControlBase<any>;
  @Input() form: FormGroup;
  @Output() deleteRow: EventEmitter<any> = new EventEmitter<any>();
  get isValid() {
    return this.form.controls[this.column.key].valid;
  }
  delete(key, i) {
    this.deleteRow.emit([key, i]);
  }
  compareFn(a, b) {
    return a && b && a.key == b.key;
  }
}

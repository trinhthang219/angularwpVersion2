import { ControlBase } from '../../control-definition/base.field';
export interface IColumnOptions {
  // getColumnMetaData(): ControlBase<any>[];
  toFormGroup(columns:ControlBase<any>[]): any;
}

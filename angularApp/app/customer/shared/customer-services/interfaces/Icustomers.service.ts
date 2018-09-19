import { Customer } from "../../customer-models/customer.model";
import { CustomerBase } from '../../customer-models/definition.base';
export interface ICustomerServices {
  getAllCustomer(): Promise<Customer[]>;
  getCustomer(id:number): Promise<Customer>;
  getColumnMetaData(): CustomerBase<any>[];
  toFormGroup(columns:CustomerBase<any>[]): any;
}

import { Customer } from "../../customer-models/customer.model";

export interface ICustomerServices {
  getAllCustomer(): Promise<Customer[]>;
  getCustomer(id:number): Promise<Customer>;
}

// import pnp from "sp-pnp-js";
import { ICustomerServices } from "./interfaces/Icustomers.service";
import { Customer } from "../customer-models/customer.model";
import { Injectable } from "@angular/core";
import { Http } from '@angular/http'; //import { Headers, Http } from '@angular/http';
import { Configuration } from '../../../app.constants';
import { CustomerBase } from '../customer-models/definition.base';
import { DropdownColumnOption } from '../customer-models/column.options.dropdown';
import { TextboxColumnOption }  from '../customer-models/column.options.textbox';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable()
export class CustomerServices implements ICustomerServices {
  // private headers = new Headers({'Content-Type': 'application/json'});
  public customerApiUrl : string =  Configuration.API_CUSTOMER_ENDPOINT ;//'https://thaisp2016.xspera.net:5443/Customer/Get'; //(<any>window)._spPageContextInfo.webAbsoluteUrl + "/_vti_bin/Xspera.Portal.Menu/SPMenuService.svc/GetAllQuickLinks";
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
  constructor(private http: Http) { }
  public getAllCustomer(): Promise<Customer[]> {
    const url = `${this.customerApiUrl}/GET`;
    return this.http.get(url)
                 .toPromise()
                 .then(response => response.json() as Customer[])
                 .catch(this.handleError);
  }
  public getCustomer(id: number): Promise<Customer> {
    const url = `${this.customerApiUrl}/GET/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }
  public getColumnMetaData() : CustomerBase<any>[] {
      let customerControl: CustomerBase<any>[] = [
        new TextboxColumnOption({
          key: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          required: true,
          order: 1
        }),
       new DropdownColumnOption({
          key: 'column',
          label: 'Column Name',
          options: [
            {key: 'ContactName',  value: 'Contact Name'},
            {key: 'Email',  value: 'Email'},
            {key: 'Phone',   value: 'Phone'},
            {key: 'CompanyName', value: 'Company Name'},
            {key: 'AccountName', value: 'Account Name'}
          ],
          required: true,
          order: 3
        }),


      ];
      return customerControl.sort((a, b) => a.order - b.order);
  }

  public toFormGroup(columns: CustomerBase<any>[] ) {
    let group: any = {};
    columns.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}

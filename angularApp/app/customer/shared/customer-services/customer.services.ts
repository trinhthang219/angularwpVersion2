import { ICustomerServices } from './interfaces/Icustomers.service';
import { Customer } from '../customer-models/customer.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //import { Headers, Http } from '@angular/http';
import { Configuration } from '../../../app.constants';
@Injectable()
export class CustomerServices implements ICustomerServices {

  // private headers = new Headers({'Content-Type': 'application/json'});

  public customerApiUrl: string = Configuration.API_CUSTOMER_ENDPOINT;
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
}


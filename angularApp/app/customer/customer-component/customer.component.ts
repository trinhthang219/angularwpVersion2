import { Component, OnInit} from "@angular/core";
// import { customers } from './customers'
import { Customer } from '../customer-models/customer.model'
import { CustomerServices } from '../customer-services/customer.services'
import { trigger, state, style, transition, animate } from "@angular/animations";
@Component({
    selector: 'app-customer-component',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss'],
    providers: [CustomerServices],
    animations: [
      trigger('slideInOut', [
        state('in', style({
          transform: 'translate3d(0, 0, 0)'
        })),
        state('out', style({
          transform: 'translate3d(100%, 0, 0)'
        })),
        transition('in => out', animate('400ms ease-in-out')),
        transition('out => in', animate('400ms ease-in-out'))
      ]),
    ]
})

export class CustomerComponent implements OnInit {
    public gridData: any[] ; //= customers;
    public message: string;
    arrayConfig: any[];
    public state = {
        skip: 0,
        take: 20,
        sort: this.arrayConfig,
        filter: {
            filters: this.arrayConfig,
            logic: 'and'
        },
        group: this.arrayConfig
    };
    // public setting = {
    //     buttonCount: 'buttonCount',
    //     info: 'info', 
    //     type: 'type', 
    //     pageSizes: [5, 10, 20],
    //     previousNext: 'previousNext'
    // }
    public customer: Customer[];
    public selectedCustomer: Customer;
    menuState:string = 'out';
    constructor(private customerServices: CustomerServices) {
        this.gridData = [];
        this.arrayConfig = [];
        this.customer = [];
        this.message = 'Hello from Customer Component constructor';
        this.menuState = 'out';
    }
    public getAllCustomers(): void {
        this.customerServices.getAllCustomer().then(result => {
             this.customer = result; console.log("abc " + result); 
             this.gridData = this.customer;
            });
    }
    public getCustomerById(): void {
        this.customerServices.getCustomer(1).then(result => { this.selectedCustomer = result; });
    }
    public ngOnInit(): void {
        console.log("customer work");
        this.getAllCustomers();
    }
  
    toggleMenu() {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}

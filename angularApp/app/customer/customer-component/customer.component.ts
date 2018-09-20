import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer-models/customer.model'
import { CustomerServices } from '../shared/customer-services/customer.services'
import { trigger, state, style, transition, animate } from '@angular/animations';
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
    public gridData: any[];
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
    public closeColumnPanel(mode: boolean) {
        if (mode) {
            this.columnPanelState = 'out';
        }
    }
    public columnOptionsChange(columns: any) {
        this.activeColumns = Object.assign([], columns);
    }
    // public setting = {
    //     buttonCount: 'buttonCount',
    //     info: 'info', 
    //     type: 'type', 
    //     pageSizes: [5, 10, 20],
    //     previousNext: 'previousNext'
    // }

    public customer: Customer[];
    public selectedCustomer: Customer;
    public columnPanelState: string = 'out';
    constructor(private customerServices: CustomerServices) {
        this.gridData = [];
        this.arrayConfig = [];
        this.customer = [];
        this.message = 'Hello from Customer Component constructor';
        this.columnPanelState = 'out';
    }

    public allColumns: any[] = [
        { key: 'CompanyName', value: 'Company Name' },
        { key: 'CompanyPresident', value: 'Company President' },
        { key: 'Address1', value: 'Address1' },
        { key: 'Address2', value: 'Address2' },
        { key: 'AccountName', value: 'Account Name' },
        { key: 'PostCode', value: 'Post Code' },
        { key: 'IsHeadQuarter', value: 'Head Quarter' },
        { key: 'StateOrProvince', value: 'State Or Province' },
        { key: 'CompanyWebsite', value: 'Company Website' },
        { key: 'PaymentMethod', value: 'Payment Method' },
        { key: 'City', value: 'City' }
    ]

    public activeColumns: any[] = [
        { key: 'CompanyName', value: 'Company Name' },
        { key: 'CompanyPresident', value: 'Company President' },
        { key: 'Address1', value: 'Address1' },
        { key: 'Address2', value: 'Address2' },
        { key: 'AccountName', value: 'Account Name' }
    ]
    public hiddenColumns: string[] = [];

    public restoreColumns(): void {
        this.hiddenColumns = [];
    }
    public hideColumn(field: string): void {
        this.hiddenColumns.push(field);
    }
    public getAllCustomers(): void {
        this.customerServices.getAllCustomer().then(result => {
            this.customer = result; console.log(result);
            this.gridData = this.customer;
        });
    }
    public getCustomerById(): void {
        this.customerServices.getCustomer(1).then(result => { this.selectedCustomer = result; });
    }
    public ngOnInit(): void {
        this.getAllCustomers();
    }
    toggleMenu() {
        this.columnPanelState = this.columnPanelState === 'out' ? 'in' : 'out';
    }
}

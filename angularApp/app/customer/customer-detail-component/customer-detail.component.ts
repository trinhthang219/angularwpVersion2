import { Component } from '@angular/core';

@Component({
    selector: 'app-customer-detail-component',
    templateUrl: './customer-detail.component.html'
})

export class CustomerDetailComponent {

    message: string;

    constructor() {
        this.message = 'Hello from Customer detail Component constructor';
    }
}

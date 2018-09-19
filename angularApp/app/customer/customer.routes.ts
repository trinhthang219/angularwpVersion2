import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer-component/customer.component';
import { CustomerDetailComponent } from './customer-detail-component/customer-detail.component';

const routes: Routes = [
    { path: '', component: CustomerComponent },
    { path: 'detail', component: CustomerDetailComponent }
];

export const CustomerRoutes = RouterModule.forChild(routes);

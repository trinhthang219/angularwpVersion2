import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
    { path: '**', loadChildren: './customer/customer.module#CustomerModule' },
];

export const AppRoutes = RouterModule.forRoot(routes ,{useHash: true});

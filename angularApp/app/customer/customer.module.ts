import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerRoutes } from './customer.routes';
import { CustomerComponent } from './customer-component/customer.component';
import { CustomerDetailComponent } from './customer-detail-component/customer-detail.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerColumnOptionsComponent } from './customer-column-options.component/customer-column-options.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './customer-column-options.component/custom-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './customer-column-options.component/custom-control/dynamic-form-question.component';
@NgModule({
    imports: [
        CommonModule,
        CustomerRoutes,
        HttpModule,
        FormsModule,
        GridModule,
        NgbModule,
        ReactiveFormsModule        
    ],
    declarations: [
        CustomerComponent, CustomerDetailComponent,CustomerColumnOptionsComponent,DynamicFormComponent,DynamicFormQuestionComponent
    ],

})

export class CustomerModule { }



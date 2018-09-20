import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],

    declarations: [
        AppComponent
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],  //Configuration.CDN_URL
    bootstrap: [AppComponent],
})

export class AppModule { }


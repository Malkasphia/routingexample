import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { TestoneComponent } from './testone/testone/testone.component';
import { TesttwoComponent } from './testtwo/testtwo/testtwo.component';
import { AppComponent } from './app.component';
import { ApplicationConfig } from '@angular/core';


export const routes: Routes = [

    {path:'testone' , component: TestoneComponent},
    {path:'testtwo' , component: TesttwoComponent},
];



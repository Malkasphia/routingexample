import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestoneComponent } from './testone/testone/testone.component';
import { TesttwoComponent } from './testtwo/testtwo/testtwo.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    TestoneComponent,
    TesttwoComponent
  ],
  imports: [
    CommonModule, BrowserModule
  ],
  providers:[provideRouter(routes)],
  bootstrap: [AppComponent],

  exports: [
    TestoneComponent,
    TesttwoComponent
  ]


})
export class ModuletestModule { }

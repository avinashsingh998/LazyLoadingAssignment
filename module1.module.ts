import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    Module1Component,
    Comp2Component,
    Comp3Component,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    ReactiveFormsModule
  ]
})
export class Module1Module { }

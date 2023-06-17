import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
import { Comp4Component } from '../comp4/comp4.component';
import { Comp5Component } from '../comp5/comp5.component';


@NgModule({
  declarations: [
    Module2Component,
    Comp4Component,
     Comp5Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }

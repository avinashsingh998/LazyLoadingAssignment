import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1Component } from './module1.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Comp3Component } from '../comp3/comp3.component';
import { PreventAccessGuard } from '../gaurd/prevent-access.guard';
import { ParentComponent } from './parent/parent.component';
import { Comp2Component } from '../comp2/comp2.component';

const routes: Routes = [
  { path: '', component: Module1Component },
  {path:'comp2',component:Comp2Component},
  {path:'parent',component:ParentComponent},
  {path:'comp3',component:Comp3Component, canActivate:[PreventAccessGuard]},
  {path:'form', component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }

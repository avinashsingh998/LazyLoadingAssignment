import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
  {path:'', component:Comp1Component},
  { path: 'module1', loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module) }, 
  { path: 'second', loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modal1Component } from './modal1/modal1.component';


const routes: Routes = [
  {path:'modal1' , component:Modal1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';


@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    CommonModule,
    Mod1RoutingModule,
    
   
  ]
})
export class Mod1Module { }

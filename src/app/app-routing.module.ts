import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaComponent} from '../app/pages/lista/lista.component';
// import {Pestana2Component} from '../app/pages/pestana2/pestana2.component';


const routes: Routes = [
  {path:'lista',component:ListaComponent},
 // {path:'pestana2',component:Pestana2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageComponent} from "./page/page/page.component";

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: ''},
  {path: 'index1', component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { Part1compComponent } from './part1comp/part1comp.component';
import { Part2Component } from './part2/part2.component';

const routes: Routes = [
  { path: '', redirectTo: '/stops', pathMatch: 'full'},
  { path: 'stops', component: Part2Component},
  { path: 'stop/:id', component: Part1compComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]}
  )

  
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './components/current/current.component';
import { FiveDayComponent } from './components/five-day/five-day.component';

const routes: Routes = [
  {path: '', component: CurrentComponent},
  {path: 'five-day-forecast', component: FiveDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

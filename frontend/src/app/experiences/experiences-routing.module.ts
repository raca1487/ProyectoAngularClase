import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { TravelComponent } from './experiences/travel/travel.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent,
    children: [
      {
        path:'travel',
        component: TravelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }

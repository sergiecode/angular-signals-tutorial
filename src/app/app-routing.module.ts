import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsComponent } from './effects/effects.component';

const routes: Routes = [
  {path: 'efects', component: EffectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsComponent } from './effects/effects.component';
import { MutateComponent } from './mutate/mutate.component';
import { UpdateComponent } from './update/update.component';
import { ComputedComponent } from './computed/computed.component';

@NgModule({
  declarations: [
    AppComponent,
    EffectsComponent,
    MutateComponent,
    UpdateComponent,
    ComputedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssFormPartIComponent } from './ass-form-part-i/ass-form-part-i.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AssFormPartIiComponent } from './ass-form-part-ii/ass-form-part-ii.component';

@NgModule({
  declarations: [
    AppComponent,
    AssFormPartIComponent,
    AssFormPartIiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

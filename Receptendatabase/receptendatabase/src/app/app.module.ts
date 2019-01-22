import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ReceptenService } from './recepten.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ReceptenService],
  bootstrap: [AppComponent]
})
export class AppModule { }

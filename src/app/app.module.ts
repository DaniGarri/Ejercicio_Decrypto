import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinsServices } from './coins/coins.service';




@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    CoinsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

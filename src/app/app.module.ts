import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Display component

import { HttpClientModule } from '@angular/common/http'
import { WeatherDataService } from './services/weatherdata.service';
import { DisplayComponent } from './components/display/display.component';

// Selection Component

import { SelectionComponent } from './components/selection/selection.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

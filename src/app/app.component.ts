import { Component } from '@angular/core';

export class Weather { 
  city: String 
  conditions: String 
  temperature: number 
  icon: String 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
}

import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app.component'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})

export class DisplayComponent {
  weather: Weather = {
    city: null,
    conditions: null,
    temperature: null,
    icon: null,
    humidity: null
  }
  history: Array<Weather> = []
  
  update(weather: Weather) { 

    this.weather = weather
    if(this.history.length > 4){  
      this.history.shift()
    }
    this.history.unshift(this.weather)
  }
}
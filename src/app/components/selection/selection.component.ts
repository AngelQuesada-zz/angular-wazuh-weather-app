import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../../services/weatherdata.service'
import { Weather } from '../../app.component';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})

export class SelectionComponent {

  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()  

  weather: Weather = new Weather()
  
  city: String = ""

  constructor(private weatherData: WeatherDataService) {}

  submit() {
    this.weatherData.load(this.city).subscribe(data => {

      const weather = {
        city: data['name'],
        conditions: data['weather'][0]['main'],
        temperature: data['main']['temp'],
        icon: this.weatherData.getIconUrl(data['weather'][0]['icon']),
        humidity: data['main']['humidity']
      }

      this.weather = weather
      this.onSelection.emit(this.weather)
    })
  }
}
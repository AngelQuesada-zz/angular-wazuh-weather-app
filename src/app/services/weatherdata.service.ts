import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = 'a05f4cc77a91b03c44d8233d0bb69d73'

@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {
  constructor(private http: HttpClient) { }
  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey +'&units=metric')
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/wn/' + icon + "@2x.png"
  }
}
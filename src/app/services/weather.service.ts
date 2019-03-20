import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getCurrentWeather(cityName): Observable<any> {
    console.log(cityName);
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${this.apiKey}`);
  }
}

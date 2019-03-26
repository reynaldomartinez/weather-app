import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'a42f9700e01d8e8d5ad400e1b060e4d4';
  constructor(private http: HttpClient) { }
  getCurrentWeather(cityName): Observable<any> {
    console.log(cityName);
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${this.apiKey}`);
  }

  getFiveDayForecast(cityName): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&units=imperial&appid=${this.apiKey}`);
  }

}

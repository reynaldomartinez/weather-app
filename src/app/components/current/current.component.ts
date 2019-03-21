import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  cityName = '';
  name: string;
  humidity: number;
  wind: number;
  temp: number;
  weatherCondition;
  date = new Date();
  displayCard = false;
  buttonCondition = true;
  badRequest = true;
  errorMessage;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  searchCity(cityName) {
    // need to subscribe
    this.weatherService.getCurrentWeather(cityName).subscribe(data => {
      // @ts-ignore
      this.name = data.name;
      this.humidity = data.main.humidity;
      this.wind = data.wind.speed;
      this.temp = data.main.temp;
      this.weatherCondition = data.weather[0].main;

      this.humidity = Math.round(this.humidity);
      this.wind = Math.round(this.wind);
      this.temp = Math.round(this.temp);
      console.log(data);
      this.displayCard = true;
    }, error => {
      this.errorMessage = error.error.message;
      // console.log(error);
      console.log(this.errorMessage);
    });
  }

}

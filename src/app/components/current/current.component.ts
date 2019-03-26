import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Router } from '@angular/router';

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
  iconImageURL;
  pngIcon;
  imageURL = `http://openweathermap.org/img/w/`;
  errorMessage;
  showError = false;
  constructor(private weatherService: WeatherService, private route: Router) { }

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
      // png image
      console.log(data.weather[0].icon);
      this.pngIcon = data.weather[0].icon;
      this.iconImageURL = `${this.imageURL}/${this.pngIcon}.png`;
      console.log(this.iconImageURL);
      // description
      console.log(data.main.temp);
      this.displayCard = true;
    }, error => {
      // console.log(error.error.message);
        this.errorMessage = 'Sorry, ' +  error.error.message + '. Try a new city.';
        console.log('There is an error');
        console.log(this.errorMessage);
    });
  }
}

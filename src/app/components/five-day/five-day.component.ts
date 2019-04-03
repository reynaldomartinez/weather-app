import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherInfo } from '../../WeatherInfo';

@Component({
  selector: 'app-five-day',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.css']
})
export class FiveDayComponent implements OnInit {
  cityName = '';
  cityInfo: WeatherInfo;
  forecast = [];
  date;
  // weekDayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  constructor(private weatherService: WeatherService) { }
 k
  ngOnInit() {
  }
  searchCity(cityName) {
    this.forecast.splice(0, this.forecast.length);
    this.weatherService.getFiveDayForecast(cityName).subscribe(data => {
      // console.log(data);
      for (let i = 0; i < data.list.length; i += 8) {
        // console.log(i);
        this.cityInfo = {
          maxTemp: data.list[i].main.temp_max,
          minTemp: data.list[i].main.temp_min,
          date: data.list[i].dt_txt,
          icon: data.list[i].weather[0].icon,
          description: data.list[i].weather[0].description
        };
        this.forecast.push(this.cityInfo);
        // this.date = data.list[i].dt_txt;
        // console.log(data.list[i].main.temp_max);
        // console.log(data.list[i].main.temp_min);
        // console.log(data.list[i].dt_txt);
        // console.log('CITYINFO:' + this.forecast);
      }
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-detail',
  templateUrl: './current-detail.component.html',
  styleUrls: ['./current-detail.component.css']
})
export class CurrentDetailComponent implements OnInit {
  @Input() name: string;
  @Input() temp: number;
  @Input() humidity: number;
  @Input() wind: number;
  @Input() weatherCondition;
  @Input() iconImageURL;
  @Input() errorMessage;
  constructor() { }

  ngOnInit() {
    // if (this.weatherCondition === 'Clear') {
    //   console.log('weather condition is: ', this.weatherCondition);
    // } else {
    //   console.log('Weather is NOT CLEAR');
    // }
  }
}

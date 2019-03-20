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
  @Input() type: number;
  constructor() { }

  ngOnInit() {
  }
}

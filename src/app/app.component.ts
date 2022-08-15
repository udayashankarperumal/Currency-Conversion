import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  canadianVal: string;
  indianVal: string;

  getCanadianValue($event) {
    this.canadianVal = $event;
  }
  getIndianValue($event) {
    this.indianVal = $event;
  }
}
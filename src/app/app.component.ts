import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Currency Conversion';
  canadianVal: any;
  indianVal: any;

  receiveIndianVal($event) {
    this.indianVal = $event;
  }

  receiveCanadianVal($event) {
    this.canadianVal = $event;
  }
}

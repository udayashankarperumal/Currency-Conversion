import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-indian-currency',
  templateUrl: './indian-currency.component.html',
  styleUrls: ['./indian-currency.component.css'],
})
export class IndianCurrencyComponent implements OnInit {
  indian_currency = 0;

  @Input() canadianVal: string;
  @Output() sendIndianVal = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onValueChange($event) {
    this.indian_currency = $event.target.value;
    this.sendIndianVal.emit(this.indian_currency);
  }
}

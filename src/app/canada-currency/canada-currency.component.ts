import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-canada-currency',
  templateUrl: './canada-currency.component.html',
  styleUrls: ['./canada-currency.component.css'],
})
export class CanadaCurrencyComponent implements OnInit {
  canadian_currency = 0;
  @Input() indianVal: any;
  @Output() sendCanadianVal = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onValueChange($event) {
    this.canadian_currency = $event.target.value;
    this.sendCanadianVal.emit(this.canadian_currency);
  }
}

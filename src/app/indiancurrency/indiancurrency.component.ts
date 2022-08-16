import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-indiancurrency',
  templateUrl: './indiancurrency.component.html',
  styleUrls: ['./indiancurrency.component.css'],
})
export class IndiancurrencyComponent implements OnInit {
  indian_currency: any;
  conversion_rate = 61.65;
  constructor() {}
  @Input() canadianVal: any;
  @Output() sendIndianVal = new EventEmitter();
  ngOnInit() {
    this.indian_currency = this.conversion_rate;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.canadianVal.currentValue);
    this.indian_currency =
      changes.canadianVal.currentValue * this.conversion_rate;
  }

  onValueChange($event) {
    this.sendIndianVal.emit($event.target.value);
  }
}

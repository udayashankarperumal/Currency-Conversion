import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-canadiancurrency',
  templateUrl: './canadiancurrency.component.html',
  styleUrls: ['./canadiancurrency.component.css'],
})
export class CanadiancurrencyComponent implements OnInit {
  canadian_currency: any = 1;
  conversion_rate: any = 0.016;
  constructor() {}
  @Input() indianVal: any;
  @Output() sendCanadianVal = new EventEmitter();
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.indianVal.currentValue);
    if (changes.indianVal.currentValue != undefined) {
      this.canadian_currency =
        this.conversion_rate * changes.indianVal.currentValue;
    }
  }

  onValueChange($event) {
    this.sendCanadianVal.emit($event.target.value);
  }
}

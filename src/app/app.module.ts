import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CanadaCurrencyComponent } from './canada-currency/canada-currency.component';
import { IndianCurrencyComponent } from './indian-currency/indian-currency.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CanadaCurrencyComponent,
    IndianCurrencyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

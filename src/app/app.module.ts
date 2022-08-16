import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IndiancurrencyComponent } from './indiancurrency/indiancurrency.component';
import { CanadiancurrencyComponent } from './canadiancurrency/canadiancurrency.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    IndiancurrencyComponent,
    CanadiancurrencyComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

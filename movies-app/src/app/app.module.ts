import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader } from './app.header';
import { AppFooter } from './app.footer';
import { AppBody } from './app.body';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppFooter,
    AppBody
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

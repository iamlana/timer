import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeveloperInfoComponent } from './developer-info/developer-info.component';
import { HeadingZeroNumberPipe } from './pipes/heading-zero-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperInfoComponent,
    HeadingZeroNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

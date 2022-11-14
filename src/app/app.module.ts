import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { jqxKnobModule } from 'jqwidgets-ng/jqxknob';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

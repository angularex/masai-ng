import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComp } from './second.component';

@NgModule({
  /* declarations is list of all components, pipes, directives you can use in your application */
  declarations: [ AppComponent, SecondComp ],
  /* imports is all modules you are using in your application */
  imports: [ BrowserModule ],
  /* providers is a list of services that are injected to your application */
  providers: [],
  /* bootstrap is a list of main components of your application */
  bootstrap: [ AppComponent ]
})
export class AppModule { }

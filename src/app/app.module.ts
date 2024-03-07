import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, AccordionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

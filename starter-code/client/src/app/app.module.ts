import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    JournalEntriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

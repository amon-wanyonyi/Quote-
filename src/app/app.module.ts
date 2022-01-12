import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { DownvoteComponent } from './downvote/downvote.component';
import { DeleteComponent } from './delete/delete.component';
import { ConterPipe } from './conter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    DownvoteComponent,
    DeleteComponent,
    ConterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

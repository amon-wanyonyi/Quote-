import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() Data = new EventEmitter()

  quotes: Quote = new Quote("","","",new Date())
  
  fetchData(detail:any) {
    let details = new Quote(detail.value.publisher, detail.value.author, detail.value.quote, detail.value.date)
    this.Data.emit(details)

    detail.reset()
  }

  constructor() { }

  ngOnInit(): void {
  }

}

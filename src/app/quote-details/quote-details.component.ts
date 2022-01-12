import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  Numbers:number = 0;
  quotes:Quote[] = [
    new Quote("Amon","Master","Better late than Never",new Date(2022,1,10))
  ]

  constructor() { }

  ngOnInit(): void {
  }

  fun(d: any) {
    d.date = new Date(d.date)
    this.quotes.push(d)
  }

  dels(Del:any,i:number) {
    if (Del) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[i].publisher}?`)

      if (toDelete){
        this.quotes.splice(i,1)
      }
    }

  }

  vote(i:number){

    this.quotes[i].vote= this.quotes[i].vote + 1
    if(this.quotes[i].vote> this.Numbers){
      this.Numbers = this.quotes[i].vote
      
    }
  }

}

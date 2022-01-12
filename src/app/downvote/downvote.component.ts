import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent implements OnInit {

  downvotes: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  downvote() {

    this.downvotes++

  }

}

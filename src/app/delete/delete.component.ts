import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Output() Del = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  del(complete: boolean) {
    this.Del.emit(complete)
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  // property
  @Input('loggedIn') logFlag !: boolean;
  //loggedIn=true;


  //send out of a child component
  @Output() greetEvent = new EventEmitter();

  name ="hajerr"

  constructor() { }

  ngOnInit(): void {
  }

  CallParentGreet() {
    this.greetEvent.emit(this.name);

  }
}

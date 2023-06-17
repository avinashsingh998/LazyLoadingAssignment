import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fromParent:any;

  @Output() emitter = new EventEmitter();

  childValue = 1000;

  constructor() { }

  decrement(){
    this.emitter.emit(--this.childValue)
    
  }

  ngOnInit(): void {
  }

}

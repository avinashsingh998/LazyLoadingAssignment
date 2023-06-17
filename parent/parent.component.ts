import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentvalue = 1;

  fromChild = 1000;

  increment(){
    this.parentvalue++;
  }

  decrement(data: number){
    this.fromChild = data;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

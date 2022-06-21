import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  greeting="before button click";
  title="lana";
  
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.greeting = "this change when button click";
    console.log("hello from test button ")
  }
  
}

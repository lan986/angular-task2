import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
@Input() parentData: any;
@Input() minValue=2;
@Input() maxValue=7;
@Output() senddata=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }


  increase(parentData:number){
    this.parentData+=1;
    this.senddata.emit(this.parentData)
  }
  decrease(parentData:number){
    this.parentData-=1;
    this.senddata.emit(this.parentData)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks';
  counterLocalValue=0;
   value='my test';
   para='';

printvalue(data:number):void{
  this.counterLocalValue=data
}


}

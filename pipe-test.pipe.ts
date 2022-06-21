import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTest'
})
export class PipeTestPipe implements PipeTransform {

  transform(value: string, para?:string):any 
  {
    if(para==="lowercase"){
   console.log("LOWER")
   return  value.toLowerCase()
    }
    else if(para==="uppercase"){
      console.log("UPPER")
     return value.toUpperCase()
       }
       else
    return value;
  }

}

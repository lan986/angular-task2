import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveIf]'
})
export class DirectiveIfDirective {
private view=false;
  constructor( 
    private  tempRef:TemplateRef<any>,
    private  viewContainer:ViewContainerRef ){}

     @Input()set appDirectiveIf(condition:boolean){
      if(condition && !this.view){

        this.viewContainer.createEmbeddedView(this.tempRef);
        
        this.view=true;

      }else if(!condition && this.view){
        this.viewContainer.clear()
        this.view=false
      }
     }
      
    }
  



import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[makeredOnHover]'
})
export class ChangeBGDirective {

  @HostBinding('style.color') color!:String;
  @HostBinding('style.fontWeight') fontWeight!:string
  

  @HostListener('mouseenter') onMouseEnter(){
    this.color = 'red';
    this.fontWeight = 'bold'
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.color = 'black';
    this.fontWeight='normal'
  }

  constructor() { }

}

import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontColor]',
  standalone: true
})
export class FontColorDirective implements OnChanges {
  @Input() custColor:string = "red";
  @Input('appFontColor') basicColor:string="green";

  constructor(private ele:ElementRef) { 
  }
  ngOnChanges():string {
    return this.ele.nativeElement.style.color =this.basicColor;
    ;
  }

  @HostListener('mouseover') over(){
    this.ele.nativeElement.style.color =this.custColor;
  }
  @HostListener('mouseout') out(){
    this.ele.nativeElement.style.color =this.basicColor ;
  }


}

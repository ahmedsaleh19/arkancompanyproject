import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {

@Input() externalColor :string = "red";
@Input('appHighlight') defaultBg :string ="yallow";
  constructor(private ele:ElementRef) {
  } 

  ngOnChanges(): string {
    return this.ele.nativeElement.style.backgroundColor = this.defaultBg;
  }
 @HostListener('mouseover') over(){
   this.ele.nativeElement.style.backgroundColor = this.externalColor;
 }
 @HostListener('mouseout') out(){
    return this.ele.nativeElement.style.backgroundColor = this.defaultBg;
 }
}

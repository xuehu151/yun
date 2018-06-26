import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTableOptionGroup]'
})
export class TableOptionGroupDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.addClass(el.nativeElement, 'table-option-group');
  }


}

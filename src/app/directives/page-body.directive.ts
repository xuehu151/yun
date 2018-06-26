import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPageBody]'
})
export class PageBodyDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.addClass(el.nativeElement, 'page-wrapper');
  }

}

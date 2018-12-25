import { Directive, ElementRef, ViewContainerRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourceDateIndicator]'
})
export class CourceDateIndicatorDirective implements OnInit {

   constructor(private el: ElementRef, private renderer: Renderer2, private containerRef: ViewContainerRef) {
   }

   setBorderColor(color: string) {
      this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${color}`);
   }

   getTimeDiff() {
      const currentDate = new Date();
      const creationDate = this.containerRef['_view'].component.item.CreationDate;
      return creationDate.getTime() - currentDate.getTime();
   }

   getDaysDiff(timeDiff) {
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
   }

   ngOnInit() {
      const timeDiff = this.getTimeDiff();
      const daysDiff = this.getDaysDiff(timeDiff);
      if (timeDiff < 0 && daysDiff > -14) {
         this.setBorderColor('green');
      } else if (timeDiff > 0) {
         this.setBorderColor('blue');
      }
   }
}

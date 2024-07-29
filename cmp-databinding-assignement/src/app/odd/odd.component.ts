import { Component,Input,ContentChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  @Input('odd') odd:number;
  @ContentChild('evenParagraph', {static: true}) paragraph: ElementRef;

  
}

import { Component, Input, ContentChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  @Input('even') even:number;
  @ContentChild('evenParagraph', {static: true}) paragraph: ElementRef;

}

import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];
  isEven:boolean;
 
  onGameStarted(number:number){
    this.numbers.push(number);
  }

  
}
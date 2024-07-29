import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles:[`
    .white-text{
      color: white;
    }
  `]
})
export class DetailsComponent {
  show = false; 
  logs = [];
  constructor(){
  
  }

  onDisplay(){
    this.show = !this.show;
    this.logs.push(this.logs.length+1);
    
  }

  getColor(item):string{
    return item >= 5 ? 'blue' : '';
  }
}

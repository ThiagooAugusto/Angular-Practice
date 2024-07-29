import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})

export class GamecontrolComponent implements OnDestroy{
count = 0;
intervalId:any = null;
@Output() gameStarted:EventEmitter<number> = new EventEmitter();

  onGameStart(){
    this.intervalId = setInterval(()=>this.gameStarted.emit(this.count++),1000);
  }

  ngOnDestroy(){
    clearInterval(this.intervalId);
    this.intervalId = null;
    console.log('game ended!');
  }
}


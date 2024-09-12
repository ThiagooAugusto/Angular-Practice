import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCount:number = 0;
  inactiveToActiveCount:number = 0;

  constructor() { }

  logStatusUpdate(status:string,user:string){
    console.log( user+' set to '+status);
  }

  logActiveToInactiveActionCount(){
    this.activeToInactiveCount++;
    console.log("number of Active->Inactive actions: "+this.activeToInactiveCount);
  }

  logInactiveToActiveActionCount(){
    this.inactiveToActiveCount++;
    console.log("number of Inactive->Active actions: "+this.inactiveToActiveCount);
  }
}

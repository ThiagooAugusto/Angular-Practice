import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  //@Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  count:number = 0;
  inactiveUsers:string[] = [];

  constructor(private userService:UserService, private counterService:CounterService){

  }
  ngOnInit(): void {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    //this.count++;
    //this.customerService.logStatusUpdate('active', this.users[id]);
    this.userService.onSetToActive(id);
    //this.customerService.logToActiveActionCount(this.count);
  }
}

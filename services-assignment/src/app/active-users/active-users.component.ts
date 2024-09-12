import { Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  //@Input() users: string[];
 

  activeUsers: string[] = [];
  //count:number = 0;

  constructor(private userService:UserService,private counterService:CounterService){

  }
  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    //this.userSetToInactive.emit(id);
    //this.count++;
    //this.customerService.logStatusUpdate('inactive',this.users[id]);
    this.userService.onSetToInactive(id);
    //this.customerService.logToInactiveActionCount(this.count);
  }
}

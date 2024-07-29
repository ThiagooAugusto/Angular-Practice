import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  template:`
  <div class="success">
    <h3>Success Component!</h3>
</div>

  `,
  styles:[
    `h3{
      color:white;
     }
    .success{
      background-color:green;
    }
    `
  ]
})
export class SuccessComponent {

}

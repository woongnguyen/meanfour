import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private _user: UserService, private _router:Router) {
    this._user.user()
    .subscribe(
      data => console.log(data),
      error=>this._router.navigate(['/home'])
    )
  }

  ngOnInit() {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data => {console.log(data);this._router.navigate(['/home'])},
      error=>console.log(error)
    )
  }
}

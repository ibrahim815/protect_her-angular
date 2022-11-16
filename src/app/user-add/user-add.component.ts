import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  user : User = new User();
  constructor(private us:UserService, private _router:Router) { }
 
addUser(){
     this.us.addUser(this.user).subscribe(()=>this._router.navigateByUrl("/listuser"));
  }

  ngOnInit(): void {
  }

}

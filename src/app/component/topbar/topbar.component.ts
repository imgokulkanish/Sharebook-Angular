import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public userService:UserService,  private router:Router) { }

  ngOnInit(): void {
    if(this.userService.user == undefined || this.userService.user == null){
      this.router.navigate(["/login"])
    }
  }
logout(){
    this.userService.user = undefined;
    this.router.navigate(["/login"]);
}
}

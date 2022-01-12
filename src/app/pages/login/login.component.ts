import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, public userService:UserService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  })
  login(){
    this.userService.getUser(this.loginForm.value.email).then((res: any)=>{
      console.log(res);
      if(res.length == 0){
        console.log("account doesn't exist");
        this.snackbar.open("Account does not exist", "ok");
      } else {
       if(res[0].password === this.loginForm.value.password){
        console.log("matched");
        this.snackbar.open("Login Successful", "ok");
   } else {
        console.log("incorrect password");
        this.snackbar.open("Incorrect Password", "ok");
      }
    }
    }).catch((err)=>{
      console.log(err);
    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  aim = "WELCOME TO CANARA BANK"
  uid = ""
  pswd = ""
  users: any = {
    1: { userid: 1, username: "riya", password: "userone" },
    2: { userid: 2, username: "miya", password: "usertwo" },

    3: { userid: 3, username: "jiya", password: "userthree" },
    4: { userid: 4, username: "liya", password: "userfour" },


  }
  constructor() { }

  ngOnInit(): void {
  }
  useridchange(event: any) {
    console.log(event.target.value);
    this.uid = event.target.value

  }
  passwordchange(event: any) {
    console.log(event.target.value);
    this.pswd = event.target.value
  }
  login(uid:any,pswd:any) {
    var userid =uid.value;
    var password = pswd.value;
    let userDetails = this.users
    if (userid in userDetails) {
      if (password == userDetails[userid]["password"]) {
        alert("login succesful")
      }
      else{
        alert("invalid password")
      }
    }
    else{
      alert("invalid user")
    }
  }
}

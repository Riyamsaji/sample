import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  aim = "WELCOME"
  userid = "Userid please"
  password = ""
 
  //dependency injection -> dependent classes in which instance of one class can be assigned to other class's object
  // always dependency injected on constructor
  constructor(private router:Router,private db:DatabaseService) { }

  ngOnInit(): void {
  }
  // useridchange(event: any) {
  //   console.log(event.target.value);
  //   this.uid = event.target.value

  // }
  // passwordchange(event: any) {
  //   console.log(event.target.value);
  //   this.pswd = event.target.value
  // }

  login() {
    var userid =this.userid;
    var password = this.password;
 var result=this.db.login(userid,password)
if(result){
  alert("login sucess")
  this.router.navigateByUrl("dashboard")
}

     
  }
}

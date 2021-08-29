import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userid=""
  username=""
  password=""
 
  constructor(private ds:DatabaseService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  var userid=this.userid;
  var username=this.username;
  var password=this.password;
  var result=this.ds.register(userid,username,password)
  if(result){
    alert("succesfuly created")
    this.router.navigateByUrl("")
  }
  else{
    alert("already exist")
    this.router.navigateByUrl("")

  }
}
}

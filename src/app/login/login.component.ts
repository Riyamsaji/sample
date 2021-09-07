import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  aim = "WELCOME TO REMINDER APP!"
  userid = "Userid please"
  password = ""
  image="./assets/IMAGES/login.jpg"
  


loginForm=this.fb.group({
  userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
})
  

  //dependency injection -> dependent classes in which instance of one class can be assigned to other class's object
  // always dependency injected on constructor
  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

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
    if(this.loginForm.valid){
    var userid =this.loginForm.value.userid;
    var password = this.loginForm.value.password;
 this.db.login(userid,password)
 .subscribe((result:any)=>{
  if(result){
    alert(result.message)
    localStorage.setItem("username",result.username)
    localStorage.setItem("userid",result.userid)
    this.router.navigateByUrl("dashboard")
  
    
  }
 },(result)=>{
   console.log(result.error.message)
   alert(result.error.message)

 })


     
  
    }
else{
  alert("invalid form")
}
}

}
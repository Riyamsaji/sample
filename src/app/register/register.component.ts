import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
registerForm=this.fb.group({userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]})//form group creation using Formbuilder method group

 
  constructor(private ds:DatabaseService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
  if(this.registerForm.valid){

  
  var userid=this.registerForm.value.userid;
  var username=this.registerForm.value.username;
  var password=this.registerForm.value.password;
  this.ds.register(userid,username,password)
  .subscribe((result:any)=>{
    if(result){
      alert("succesfuly created")
      this.router.navigateByUrl("")
    }
   
  },(result)=>{
    alert(result.error.message)
    this.router.navigateByUrl("")
  })
  
}

else{
  alert("invalid form")
}
}
}

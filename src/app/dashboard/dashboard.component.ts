import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 Date:any
  eventform=this.fb.group({
    date:[''],
    reminder:['']
  })
  user=this.ds.currentuser;
  username:any
 userid:any
  constructor(private ds:DatabaseService,private fb:FormBuilder,private router:Router) { 
this.username=localStorage.getItem("username")
this.ViewTodaysevent()
  }

  ngOnInit(): void {
  }
  addEvent(){
  
  var date=this.eventform.value.date;
  console.log(this.eventform);
  
  var reminder=this.eventform.value.reminder;
  this.ds.addEvent(date,reminder)
  .subscribe((result:any)=>{
    if(result){
      console.log(result);
      
      alert(result.message)
    }
  })
 
 
}
ViewTodaysevent(){
this.Date=new Date()

  
  
}
deleteUser(){
  this.userid=localStorage.getItem("userid")
  console.log(this.userid);
  
}
OnDeleteAtParent(event:any){
  this.ds.OnDeleteUser(event)
  .subscribe((result:any)=>{
    if(result){
      console.log(result);
      
      alert(result.message)
      this.router.navigateByUrl('')

    }
    
  },(result)=>{
    alert(result.error.message)
  })
 
}
}

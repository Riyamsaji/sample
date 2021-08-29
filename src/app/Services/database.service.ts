import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  users: any = {
    1: { userid: 1, username: "riya", password: "userone" },
    2: { userid: 2, username: "miya", password: "usertwo" },

    3: { userid: 3, username: "jiya", password: "userthree" },
    4: { userid: 4, username: "liya", password: "userfour" },


  }
  constructor() { }
  register(userid:any,username:any,password:any){
    let userDetails=this.users;
    if(userid in userDetails){
     
      return false
    }
    else{
      userDetails[userid]={
        userid,
        username,
        password
      }
   
      return true
    }
  }
  login(userid:any,password:any){
    let userDetails=this.users;
    if(userid in userDetails){
      if(password==userDetails[userid]["password"]){
       
        return true
      }
      else{
        alert("invalid password")
        return false
      }
    }
    else{
      alert("invalid  user")
      return false
    }
  }
}

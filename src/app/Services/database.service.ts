import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  currentuser=""
  currentid=""
  users: any = {
    1: { userid: 1, username: "riya", password: "userone",event:[] },
    2: { userid: 2, username: "miya", password: "usertwo",event:[] },

    3: { userid: 3, username: "jiya", password: "userthree",event:[] },
    4: { userid: 4, username: "liya", password: "userfour",event:[] },


  }
  constructor(private http:HttpClient) { 
    // this.getData()
  }
getEvent(userid:any){
  const data={
    userid
  }
    return this.http.post("http://localhost:3000/getEvent",data,options)
}
  saveData(){
    localStorage.setItem("users",JSON.stringify(this.users))
    if(this.currentuser){
    localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
  }
  if(this.currentid){
    localStorage.setItem("currentid",JSON.stringify(this.currentid))
  }
}
getData(){
  if(localStorage.getItem("users")){
this.users=JSON.parse(localStorage.getItem("users")|| "")
  }
if(localStorage.getItem("currentuser")){
this.currentuser=JSON.parse(localStorage.getItem("currentuser")|| "")
}
if(localStorage.getItem("currentid")){
  this.currentid=JSON.parse(localStorage.getItem("currentid")|| "")
}
}
  register(userid:any,username:any,password:any){
    const data={
      userid,
      username,
      password
    }
    return this.http.post("http://localhost:3000/register",data)
    // let userDetails=this.users;
    // if(userid in userDetails){
     
    //   return false
    // }
    // else{
    //   userDetails[userid]={
    //     userid,
    //     username,
    //     password,
    //     event:[]
    //   }
    //  this.saveData()
    //   return true
    // }
  }
  login(userid:any,password:any){
    // let userDetails=this.users;
    // if(userid in userDetails){
    //   if(password==userDetails[userid]["password"]){
    //    this.currentuser=userDetails[userid]["username"]
    //    this.currentid=userid
    //    this.saveData()
    //     return true
    //   }
    //   else{
    //     alert("invalid password")
    //     return false
    //   }
    // }
    // else{
    //   alert("invalid  user")
    //   return false
    const data={
      userid,
      password
    }
    return this.http.post("http://localhost:3000/login",data,options)
  }
  addEvent(date:any,reminder:any){
  //   let userDetails=this.users;
  //   userDetails[this.currentid].event.push({
  //      date,
  //      reminder
  //    })
  //    this.saveData();
  //    return true
  // }
  const data={
    date,
    reminder
  }
 return this.http.post("http://localhost:3000/addEvent",data,options)
}
OnDeleteUser(userid:any){
  return this.http.delete("http://localhost:3000/OnDeleteUser/" +userid,options)
}

}

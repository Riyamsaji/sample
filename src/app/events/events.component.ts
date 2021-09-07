import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Services/database.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events:any
userid:any
  constructor(private ds:DatabaseService) {
    this.userid=localStorage.getItem("userid")
    this.ds.getEvent(this.userid)
    .subscribe((result:any)=>{
if(result){
  this.events=result.event
}

    },(result)=>{
      alert(result.error.message);
    
    })
    console.log(this.events);
    
  }

  ngOnInit(): void {
  }
sort(){
  alert("click")
  const sortedarray = this.events.sort((a:any, b:any) => b.date < a.date ? 1: -1);
  console.log(sortedarray);
  return sortedarray
  
  
}
}







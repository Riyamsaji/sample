import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteconfirmation',
  templateUrl: './deleteconfirmation.component.html',
  styleUrls: ['./deleteconfirmation.component.css']
})
export class DeleteconfirmationComponent implements OnInit {
@Input() item:string|undefined
@Output() OnDelete=new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.OnDelete.emit(this.item)
    alert("deleting")
  }
  cancel(){
    alert("cancel")
  }
}

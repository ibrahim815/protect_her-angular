import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Event } from 'src/app/model/Event';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.scss']
})
export class ModalEventComponent implements OnInit {
  event : Event = new Event();
  A!:any
  eventById!:Event
  
  constructor(private eventService:EventService,private _router:Router, public dialogRef: MatDialogRef<ModalEventComponent>,
  
) { }

  ngOnInit(): void {
    let e=localStorage.getItem('e')
    if(e==='1'){
    let id=localStorage.getItem('idEvent')
this.eventService.getEventById(id).subscribe(data=>{
  this.event=data

})
}
   
    if(e==='0'){
      this.A="Add"
    }
    if(e==='1'){
      this.A="Update"
    }
  }

  addEvent(){
    let e=localStorage.getItem('e')
if(e==='0')
{
  this.eventService.addEvent(this.event).subscribe(()=>{
    this.onNoClick()
    this._router.navigateByUrl("/event")});
}
if(e==='1')
{
  let id=localStorage.getItem('idEvent')
  this.eventService.UpdateEvent(id,this.event).subscribe(()=>{
    this.onNoClick()
    this._router.navigateByUrl("/event")});
}
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

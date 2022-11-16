import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Advertising } from 'src/app/model/Advertising';
import { AdvertisingService } from 'src/app/shared/advertising.service';

@Component({
  selector: 'app-modal-advertising',
  templateUrl: './modal-advertising.component.html',
  styleUrls: ['./modal-advertising.component.scss']
})
export class ModalAdvertisingComponent implements OnInit {
  advertising : Advertising = new Advertising();
  A!:any
  advertisingById!:Advertising

  constructor(private advertisingService:AdvertisingService,private _router:Router, public dialogRef: MatDialogRef<ModalAdvertisingComponent>,
    ) { }

  ngOnInit(): void {
    let e=localStorage.getItem('e')
    if(e==='1'){
    let id=localStorage.getItem('idAdvertising')
this.advertisingService.getAdvertisingById(id).subscribe(data=>{
  this.advertising=data
})
 }

 
 if(e==='0'){
  this.A="Add"
}
if(e==='1'){
  this.A="Update"
}
}

addAdvertising(){
  let e=localStorage.getItem('e')
if(e==='0')
{
  this.advertisingService.addEvent(this.advertising).subscribe(()=>{
    this.onNoClick()
    this._router.navigateByUrl("/advertising")});
  }
  if(e==='1')
{
  let id=localStorage.getItem('idAdvertising')
  this.advertisingService.UpdateAdvertising(id,this.advertising).subscribe(()=>{
    this.onNoClick()
    this._router.navigateByUrl("/advertising")});
}
}
onNoClick(): void {
  this.dialogRef.close();
}
}
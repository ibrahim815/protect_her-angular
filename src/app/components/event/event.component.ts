import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Event } from 'src/app/model/Event';
import { EventService } from 'src/app/shared/event.service';
import { UserAddComponent } from 'src/app/user-add/user-add.component';
import { ModalEventComponent } from './modal-event/modal-event.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public displayedColumns = ['name', 'eventDate', 'concept', 'capacite','donationtype','photoE','details', 'update', 'delete'
];
  public dataSource = new MatTableDataSource<Event>();

  constructor(public dialog: MatDialog,private eventService:EventService) { }

  ngOnInit(): void {
    localStorage.setItem('e','0')
     this.getAllEvent()
 }
 openDialog(): void {
  localStorage.setItem('e','0')
  const dialogRef = this.dialog.open(ModalEventComponent, {
    width: '250px',
    
  });
  


}
openDialogUpdate(): void {
localStorage.setItem('e','1')
  const dialogRef = this.dialog.open(ModalEventComponent, {
    width: '250px',
    
  });
  


}
public getAllEvent = () => {
  this.eventService.getEvent()
  .subscribe(res => {
    this.dataSource.data = res as Event[];
  })
}

public redirectToDetails = (id: string) => {
    
}
public redirectToUpdate = (id:any ) => {
localStorage.setItem('idEvent',id)
  this.openDialogUpdate()
  
}
public redirectToDelete = (id: Number) => {
  this.eventService.DeleteEvent(id).subscribe(
    data=>{

      this.getAllEvent()

    }
  )
  
}
}


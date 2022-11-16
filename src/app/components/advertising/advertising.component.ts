import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Advertising } from 'src/app/model/Advertising';
import { AdvertisingService } from 'src/app/shared/advertising.service';
import { ModalAdvertisingComponent } from './modal-advertising/modal-advertising.component';



@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})

export class AdvertisingComponent implements OnInit {

  public displayedColumns = ['name', 'AdvertisingDate', 'Description', 'photo','details', 'update', 'delete'
];
public dataSource = new MatTableDataSource<Advertising>();

constructor(public dialog: MatDialog,private advertisingService:AdvertisingService) { }



  ngOnInit(): void { 
    localStorage.setItem('e','0')
    this.getAllAdvertising()
  }
  openDialog(): void {
    localStorage.setItem('e','0')
    const dialogRef = this.dialog.open(ModalAdvertisingComponent, {
      width: '250px',
      
    });

}
openDialogUpdate(): void {
  localStorage.setItem('e','1')
    const dialogRef = this.dialog.open(ModalAdvertisingComponent, {
      width: '250px',
      
    });
    
  
  }

  public getAllAdvertising = () => {
    this.advertisingService.getAdvertising()
    .subscribe(res => {
      this.dataSource.data = res as Advertising[];
    })
  }
  public redirectToDetails = (id: string) => {
    
  }

  public redirectToUpdate = (id:any ) => {
    localStorage.setItem('idAdvertising',id)
      this.openDialogUpdate()
      
    }
    public redirectToDelete = (id: Number) => {
      this.advertisingService.DeleteAdvertising(id).subscribe(
        data=>{
    
          this.getAllAdvertising()
    
        }
      )
      
    }
}
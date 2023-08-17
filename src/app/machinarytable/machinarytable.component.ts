import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-machinarytable',
  templateUrl: './machinarytable.component.html',
  styleUrls: ['./machinarytable.component.css']
})
export class MachinarytableComponent implements AfterViewInit {
  displayedColumns: string[] =
  ['position', 'date', 'consumable', 'specification', 'qty', 'price','status'];
 dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 @ViewChild(MatPaginator) paginator!: MatPaginator;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }
}

export interface PeriodicElement {
  date: string;     //date
  position: number;  //sno
  consumable: string;     //consumable
  specification: string;   //specification
  qty: string;
  price: string;
  status:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, date: '',consumable: '',specification: '',qty: '', price: '',status:'' },
  { position: 2, date: '',consumable: '',specification: '',qty: '', price: '',status:'' },
  { position: 3, date: '',consumable:'', specification: '',qty: '', price: '',status:''},
  { position: 4, date: '',consumable: '',specification: '',qty: '', price: '',status:''},
  { position: 5, date: '',consumable: '', specification: '', qty: '', price: '',status:'' },
  { position: 6, date: '',consumable: '', specification: '', qty: '', price: '',status:'' },
  { position: 7, date: '',consumable: '', specification: '', qty: '', price: '',status:''},
  { position: 8, date: '',consumable: '', specification: '', qty: '', price: '',status:'' },
  { position: 9, date: '',consumable: '', specification: '', qty: '', price: '',status:'' },
  { position: 10,date: '',consumable:  '', specification: '',qty: '', price: '',status:'' },
  { position: 11,date: '',consumable:  '', specification: '',qty: '', price: '',status:'' },
  { position: 12, date: '',consumable: '',specification: '',qty: '', price: '',status:'' },
  { position: 13,date: '',consumable:  '',specification: '',qty: '', price: '',status:'' },
  { position: 14, date: '',consumable:  '',specification: '',qty: '', price: '',status:'' },
  { position: 15,date: '',consumable: '',specification: '', qty: '', price: '',status:'' },
  { position: 16, date: '',consumable:  '',specification: '', qty: '', price: '',status:'' },
  { position: 17,date: '', consumable:  '',specification: '',qty: '', price: '',status:'' },
  { position: 18, date: '',consumable:  '',specification: '',qty: '', price: '',status:'' },
  { position: 19,date: '', consumable:  '',specification: '', qty: '', price: '',status:'' },
  { position: 20, date: '',consumable:  '',specification: '',qty: '', price: '',status:'' },
];

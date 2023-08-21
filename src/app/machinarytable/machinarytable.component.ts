import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';




interface Country {
	id?: number;
	date: string;
	equipment: string;
	specification: string;
	qty: string;
  price:string;
  // hmr:string;
  opening:string;
  closing:string;
  total:string;
//  Total:string;
 cumulative:string;
 alloted:string;
 fuelconsumption:string
}
const COUNTRIES: Country[] = [
  // Your country objects here
  {
		date:'',
	equipment:'',
	specification:'',
	qty: '',
  price:'',
  // hmr:'7',
  opening:'',
  closing:'',
  total:'',
//  Total:'2',
 cumulative:'',
 alloted:'',
 fuelconsumption:''
	},
  {
		date:'',
	equipment:'',
	specification:'',
	qty: '',
  price:'',
  // hmr:'',
  opening:'',
  closing:'',
  total:'',
//  Total:'',
 cumulative:'',
 alloted:'',
 fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
		date:'',
	equipment:'',
	specification:'',
	qty: '',
  price:'',
  // hmr:'',
  opening:'',
  closing:'',
  total:'',
//  Total:'',
 cumulative:'',
 alloted:'',
 fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
		date:'',
	equipment:'',
	specification:'',
	qty: '',
  price:'',
  // hmr:'',
  opening:'',
  closing:'',
  total:'',
//  Total:'',
 cumulative:'',
 alloted:'',
 fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  {
		date:'',
	equipment:'',
	specification:'',
	qty: '',
  price:'',
  // hmr:'',
  opening:'',
  closing:'',
  total:'',
//  Total:'',
 cumulative:'',
 alloted:'',
 fuelconsumption:''
	},
  {
    date:'',
    equipment:'',
    specification:'',
    qty: '',
    price:'',
    // hmr:'',
    opening:'',
    closing:'',
    total:'',
  //  Total:'',
   cumulative:'',
   alloted:'',
   fuelconsumption:''
	},
  
];






@Component({
  selector: 'app-machinarytable',
  templateUrl: './machinarytable.component.html',
  styleUrls: ['./machinarytable.component.css']
})
export class MachinarytableComponent {
  page = 1;
	pageSize = 10;
	collectionSize = COUNTRIES.length;
	countries:Country []=[];

	constructor() {
		this.refreshCountries();
	}

	refreshCountries() {
		this.countries = COUNTRIES.map((country, i:any) => ({ id: i + 1, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}


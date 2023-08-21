import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Country {
	id?: number;
	date: string;
	category: string;
	workinghours: string;
	qty: string;
  price:string;
  totalhours:string;
  cumulative:string;
  alloted:string;
  status:string;
}
const COUNTRIES: Country[] = [
  // Your country objects here
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  {
    date: '',
    category: '',
    workinghours:'',
    qty: '',
    price:'',
    totalhours:'',
    cumulative:'',
    alloted:'',
    status:''
	},
  
];
@Component({
  selector: 'app-manpower-table',
  templateUrl: './manpower-table.component.html',
  styleUrls: ['./manpower-table.component.css']
})
export class ManpowerTableComponent {
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


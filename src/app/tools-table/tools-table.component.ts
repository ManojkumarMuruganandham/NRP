import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



interface Country {
	id?: number;
	date: string;
	description: string;
	qty: string;
	price: string;
  Qty:string;
  Price:string;
  
}
const COUNTRIES: Country[] = [
  // Your country objects here
  {
		date:'test',
    description:'test',
    qty: 'test',
    price: 'test',
    Qty:'test',
    Price:'test'
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
    date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  {
		date:'',
    description:'',
    qty: '',
    price: '',
    Qty:'',
    Price:''
	},
  
];

@Component({
  selector: 'app-tools-table',
  templateUrl: './tools-table.component.html',
  styleUrls: ['./tools-table.component.css']
})
export class ToolsTableComponent {
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

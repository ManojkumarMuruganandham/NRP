import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



interface Country {
	id?: number;
	consumable: string;
	specifiction: string;
	qty: string;
	price: string;
  status:string;
  col1:string;
  col2:string;
}
const COUNTRIES: Country[] = [
  // Your country objects here
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price: '',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price: '',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price: '',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
    price: '',
    status:'',
    col1:'',
    col2:'',
	},
  {
    consumable: '',
    specifiction: '',
		qty:'',
		price: '',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  {
		consumable: '',
    specifiction: '',
		qty:'',
		price:'',
    status:'',
    col1:'',
    col2:'',
	},
  
];

@Component({
  selector: 'app-safety-table',
  templateUrl: './safety-table.component.html',
  styleUrls: ['./safety-table.component.css']
})
export class SafetyTableComponent{
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


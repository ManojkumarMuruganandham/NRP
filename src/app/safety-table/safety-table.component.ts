import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



interface Country {
	id?: number;
	date:any;
	description: string;
	qty: number;
	price:number;
  Qty:number;
  Price:number;

}
const COUNTRIES: Country[] = [
  // Your country objects here
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
	},
  {
    date:'01.01.2024',
    description:'test',
    qty:2,
    price:150,
    Qty:1,
    Price:100
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


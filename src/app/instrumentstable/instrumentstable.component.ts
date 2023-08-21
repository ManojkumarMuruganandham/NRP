import { Component,ViewChild,AfterViewInit} from '@angular/core';
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
		date:'09.09.2024',
	description: 'test',
	qty:1,
	price:100,
  Qty:1,
  Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
  },
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  {
    date:'09.09.2024',
    description: 'test',
    qty:1,
    price:100,
    Qty:1,
    Price:150,
	},
  
];

@Component({
  selector: 'app-instrumentstable',
  templateUrl: './instrumentstable.component.html',
  styleUrls: ['./instrumentstable.component.css']
})
export class InstrumentstableComponent {
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


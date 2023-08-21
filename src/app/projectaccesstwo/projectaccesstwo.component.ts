import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectaccesstwo',
  templateUrl: './projectaccesstwo.component.html',
  styleUrls: ['./projectaccesstwo.component.css']
})
export class ProjectaccesstwoComponent {
  constructor(private router:Router){}
  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
  forward(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

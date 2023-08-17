import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectaccessfour',
  templateUrl: './projectaccessfour.component.html',
  styleUrls: ['./projectaccessfour.component.css']
})
export class ProjectaccessfourComponent {
  constructor(private router:Router){}
  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

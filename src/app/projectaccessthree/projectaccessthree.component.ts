import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectaccessthree',
  templateUrl: './projectaccessthree.component.html',
  styleUrls: ['./projectaccessthree.component.css']
})
export class ProjectaccessthreeComponent {
  constructor(private router:Router){}
  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
  forward(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

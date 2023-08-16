import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectcodetwo',
  templateUrl: './projectcodetwo.component.html',
  styleUrls: ['./projectcodetwo.component.css']
})
export class ProjectcodetwoComponent {

  constructor(private router:Router){}
  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

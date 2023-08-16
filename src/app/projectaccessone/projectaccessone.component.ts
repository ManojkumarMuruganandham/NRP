import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectaccessone',
  templateUrl: './projectaccessone.component.html',
  styleUrls: ['./projectaccessone.component.css']
})
export class ProjectaccessoneComponent {
  constructor(private router:Router){}
  forward(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }

  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectaccess',
  templateUrl: './projectaccess.component.html',
  styleUrls: ['./projectaccess.component.css']
})
export class ProjectaccessComponent {
  constructor(private router:Router){}
  next(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

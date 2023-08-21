import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectcode',
  templateUrl: './projectcode.component.html',
  styleUrls: ['./projectcode.component.css']
})
export class ProjectcodeComponent {
  constructor(private router:Router){}
  next(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

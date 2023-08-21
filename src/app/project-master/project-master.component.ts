import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-master',
  templateUrl: './project-master.component.html',
  styleUrls: ['./project-master.component.css']
})
export class ProjectMasterComponent {
  constructor(private router:Router){}
  projectCreate(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

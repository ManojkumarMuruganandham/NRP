import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-master-create',
  templateUrl: './project-master-create.component.html',
  styleUrls: ['./project-master-create.component.css']
})
export class ProjectMasterCreateComponent {

  constructor(private router:Router){}
  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectteamcreate',
  templateUrl: './projectteamcreate.component.html',
  styleUrls: ['./projectteamcreate.component.css']
})
export class ProjectteamcreateComponent {
  constructor(private router:Router){}
  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

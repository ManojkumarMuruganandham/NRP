import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectteam',
  templateUrl: './projectteam.component.html',
  styleUrls: ['./projectteam.component.css']
})
export class ProjectteamComponent {
  constructor(private router:Router){}
  next(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

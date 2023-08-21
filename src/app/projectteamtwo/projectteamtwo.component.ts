import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectteamtwo',
  templateUrl: './projectteamtwo.component.html',
  styleUrls: ['./projectteamtwo.component.css']
})
export class ProjectteamtwoComponent {
  constructor(private router:Router){}
  back(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
  forward(pageName:string):void{


    this.router.navigate([`${pageName}`]);
  }
}

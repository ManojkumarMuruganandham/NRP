import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { MachineryReportPageComponent } from './machinery-report-page/machinery-report-page.component';
import { ManPowerReportPageComponent } from './man-power-report-page/man-power-report-page.component';
import { ToolsTacklesPageComponent } from './tools-tackles-page/tools-tackles-page.component';
import { InstrumentsReportPageComponent } from './instruments-report-page/instruments-report-page.component';
import { SafetyReportPageComponent } from './safety-report-page/safety-report-page.component';
import { ProjectMasterComponent } from './project-master/project-master.component';
import { ProjectMasterCreateComponent } from './project-master-create/project-master-create.component';
import { ProjectcodeComponent } from './projectcode/projectcode.component';
import { ProjectcodetwoComponent } from './projectcodetwo/projectcodetwo.component';
import { ProjectteamComponent } from './projectteam/projectteam.component';
import { ProjectteamtwoComponent } from './projectteamtwo/projectteamtwo.component';
import { ProjectteamcreateComponent } from './projectteamcreate/projectteamcreate.component';
import { ProjectaccessComponent } from './projectaccess/projectaccess.component';
import { ProjectaccessoneComponent } from './projectaccessone/projectaccessone.component';
import { ProjectaccesstwoComponent } from './projectaccesstwo/projectaccesstwo.component';
import { ProjectaccessthreeComponent } from './projectaccessthree/projectaccessthree.component';
import { ProjectaccessfourComponent } from './projectaccessfour/projectaccessfour.component';

// import { MachineryReportPageComponent } from './machinery-report-page/machinery-report-page.component';

const routes: Routes = [
{path:'',
 pathMatch:'full',
 redirectTo:'app-reports'
},
{
  path:'reports',
  component: ReportsComponent,
},
{
  path:'machinery-report-page',
  component: MachineryReportPageComponent,
},
{
  path:'man-power-report-page',
  component:  ManPowerReportPageComponent,
},
{
  path:'tools-tackles-page',
  component:ToolsTacklesPageComponent,
},
{
  path:'instruments-report-page',
  component:InstrumentsReportPageComponent,
},
{
  path:'safety-report-page',
  component:SafetyReportPageComponent,
},
{
  path:'project-master',
  component:ProjectMasterComponent,
},
{
  path:'project-master-create',
  component: ProjectMasterCreateComponent,
},
{
  path:'projectcode',
  component: ProjectcodeComponent,
},
{
  path:'projectcodetwo',
  component: ProjectcodetwoComponent,
},
{
  path:'projectteam',
  component: ProjectteamComponent,
},
{
  path:'projectteamtwo',
  component: ProjectteamtwoComponent,
},
{
  path:'projectteamcreate',
  component: ProjectteamcreateComponent,
},
{
  path:'projectaccess',
  component: ProjectaccessComponent,
},
{
  path:'projectaccessone',
  component: ProjectaccessoneComponent,
},
{
  path:'projectaccesstwo',
  component: ProjectaccesstwoComponent,
},
{
  path:'projectaccessthree',
  component: ProjectaccessthreeComponent,
},
{
  path:'projectaccessfour',
  component: ProjectaccessfourComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
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
// import { MachineryReportPageComponent } from './machinery-report-page/machinery-report-page.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableComponentComponent } from './table-component/table-component.component';
import { ProjectaccessComponent } from './projectaccess/projectaccess.component';
import { ProjectaccessoneComponent } from './projectaccessone/projectaccessone.component';
import { ProjectaccesstwoComponent } from './projectaccesstwo/projectaccesstwo.component';
import { ProjectaccessthreeComponent } from './projectaccessthree/projectaccessthree.component';
import { ProjectaccessfourComponent } from './projectaccessfour/projectaccessfour.component';
import { MachinarytableComponent } from './machinarytable/machinarytable.component';
import { ManpowerTableComponent } from './manpower-table/manpower-table.component';
import { ToolsTableComponent } from './tools-table/tools-table.component';
import { InstrumentstableComponent } from './instrumentstable/instrumentstable.component';
import { SafetyTableComponent } from './safety-table/safety-table.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    MachineryReportPageComponent,
    ManPowerReportPageComponent,
    ToolsTacklesPageComponent,
    InstrumentsReportPageComponent,
    SafetyReportPageComponent,
    ProjectMasterComponent,
    ProjectMasterCreateComponent,
    ProjectcodeComponent,
    ProjectcodetwoComponent,
    ProjectteamComponent,
    ProjectteamtwoComponent,
    ProjectteamcreateComponent,
    TableComponentComponent,
    ProjectaccessComponent,
    ProjectaccessoneComponent,
    ProjectaccesstwoComponent,
    ProjectaccessthreeComponent,
    ProjectaccessfourComponent,
    MachinarytableComponent,
    ManpowerTableComponent,
    ToolsTableComponent,
    InstrumentstableComponent,
    SafetyTableComponent,
    LoginComponent,
 
    
 
  
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    // NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

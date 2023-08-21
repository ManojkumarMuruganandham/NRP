import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { NgxPaginationModule } from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  exports:[MatSidenavModule,
    MatSlideToggleModule,
     BrowserAnimationsModule,
     MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    NgxPaginationModule,
    MatPaginatorModule,
     MatTableModule,
  
  ]

})
export class MaterialModule { }

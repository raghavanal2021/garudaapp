import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AgGridModule } from 'ag-grid-angular';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { AddtowatchlistComponent } from './addtowatchlist/addtowatchlist.component';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { StockmasterService } from './stockmaster.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ChipModule } from "primeng/chip";
import {DividerModule} from 'primeng/divider';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { WatchlistpageComponent } from './watchlistpage/watchlistpage.component';
import { WatchlistService } from './watchlist.service';
import {PanelModule} from 'primeng/panel';



@NgModule({
  declarations: [
    WatchlistComponent,
    AddtowatchlistComponent,
    CompanydetailsComponent,
    WatchlistpageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    CardModule,
    AutoCompleteModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    ChipModule,
    DividerModule,
    PanelModule,
    AgGridModule.withComponents([])
  ],
  providers:[StockmasterService,DialogService,MessageService, WatchlistService]
})
export class WatchlistModuleModule { }

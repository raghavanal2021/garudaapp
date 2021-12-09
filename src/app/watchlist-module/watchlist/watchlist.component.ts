import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { WatchlistService } from '../watchlist.service';
import { AgGridAngular } from 'ag-grid-angular';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { AddtowatchlistComponent } from '../addtowatchlist/addtowatchlist.component';
import { StockmasterService } from '../stockmaster.service';
import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs: ColDef[] = [
    { field: 'Symbol' },
    { field: 'open', enableCellChangeFlash: true },
    { field: 'high', enableCellChangeFlash: true },
    { field: 'low', enableCellChangeFlash: true },
    { field: 'close', enableCellChangeFlash: true },
    { field: 'volume', enableCellChangeFlash: true },
  ];
  filterService: FilterService;
  gridApi: any;
  gridColumnApi: any;
  asyncTransactionWaitMillis;
  groupDisplayType;
  rowSelection: any;
  messagelist = [];
  row: any = [];
  newItems: any = [];
  detailSelectrow: any;
  details: any = [];
  ref: DynamicDialogRef;
  selectedCompanies: any[] = [];
  filteredCompanies: any[] = [];
  showDetails: boolean = false;
  constructor(
    private watchlistService: WatchlistService,
    public dialogService: DialogService,
    public messageService: MessageService,
    private stockMaster: StockmasterService
  ) { }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.asyncTransactionWaitMillis = 4;
    this.gridApi.sizeColumnsToFit();
    
  }

  getRowNodeId = (data) => data.Symbol;

  onFlushTransactions() {
    this.gridApi.flushAsyncTransactions();
  }

  ngOnInit(): void {
    
    this.stockMaster.getWatchList().subscribe((data) => {
      let parsejson = JSON.parse(data);
      for (let p = 0; p < parsejson.length; p++) {
        let symbollist = parsejson[p]['Symbol'];
        this.messagelist.push(symbollist);
        this.row.push(parsejson[p]);
        this.details.push(parsejson[p]);
      }
      setTimeout(() => {
        this.gridApi.setRowData(this.row);
      }, 10);
    });

    this.watchlistService.getWatchlistdata().subscribe((message) => {
      let msg = JSON.parse(message);
      console.log(msg);
      var ticker = msg['Symbol'].toString();
      var resultCallback = function () {
        console.log('transactionApplied()');
      };
      if (
        this.messagelist.findIndex((element) => element == msg['Symbol']) != -1
      ) {
        this.row.push(msg);
        this.gridApi.applyTransactionAsync(
          { update: this.row },
          resultCallback
        );
        this.onFlushTransactions();
      }
    });
  }

  show() {
    this.ref = this.dialogService.open(AddtowatchlistComponent, {
      header: 'Add to Watchlist',
      width: '40%',
      height: '600px',
      contentStyle: { 'max-height': '900px' },
      baseZIndex: 1000,
    });

    this.ref.onClose.subscribe((stockList: []) => {
      this.gridApi.sizeColumnsToFit();
      console.log(stockList);
      this.gridApi.applyTransactionAsync({ add: stockList });  
    /*  for (let i = 0; i < stockList.length; i++) {
        row1.push(JSON.parse(JSON.stringify(stockList[i])));
        var resultCallback = function () {
          console.log('transactionApplied()');
        };
        this.gridApi.applyTransactionAsync({ add: row1 }, resultCallback);
      }*/
    });
  }

  remove() {
    alert('Under Construction');
  }
}

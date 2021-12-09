import { Component, OnInit } from '@angular/core';
import { FilterService } from "primeng/api";
import { MenuItem } from "primeng/api";
import { SelectItem } from "primeng/api";
import { StockmasterService } from '../stockmaster.service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { StockListModel } from '../model/stocklistmodel';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-addtowatchlist',
  templateUrl: './addtowatchlist.component.html',
  styleUrls: ['./addtowatchlist.component.css']
})
export class AddtowatchlistComponent implements OnInit {
  text:string;
  results: string[];
  listmodel:any;
  stocklist:any[] = [];
  selectedstock:any[];
  filteredstock:any[];
  selstock:any[] =[];
  constructor(private stockMaster:StockmasterService,private filterService:FilterService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.stockMaster.getStockMaster().subscribe(data => {
      let outdata = JSON.parse(data)
      this.stocklist.push(outdata)
    })
  }

  filterStocks(event) {
    let filtered:any[] = []
    let query = event.query;
    let stock = this.stocklist[0];
    for (let i=0; i<stock.length;i++)
    {
      let istock = stock[i];
      if (istock['Symbol'].toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(istock);
      }
    }
    this.filteredstock = filtered;

  }

  selectstocks() {
    this.selstock.push(this.selectedstock);
  }

  removestock(stock) {
    let symbol = []
    for (let j=0; j<this.selstock.length;j++)
    {
        let isymbol = this.selstock[j]
        symbol.push(isymbol['Symbol'])
    }

        var index = symbol.indexOf(stock)
        this.selstock.splice(index,1)
      }

  finalizelist() {
      console.log(JSON.stringify(this.selstock))
      for (let k=0; k < this.selstock.length; k++)
      {
        this.stockMaster.addtowatchlist(JSON.stringify(this.selstock[k])).subscribe(data=>{console.log(data)})
      }
      this.ref.close(this.selstock)
  }

}

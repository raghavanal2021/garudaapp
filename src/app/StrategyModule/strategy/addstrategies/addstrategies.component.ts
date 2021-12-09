import { Component, OnInit } from '@angular/core';
import { StockmasterService  } from '../../../watchlist-module/stockmaster.service';
import { StockListModel } from 'src/app/watchlist-module/model/stocklistmodel';
import { StrategyModel } from './StrategyInputmodel';
@Component({
  selector: 'app-addstrategies',
  templateUrl: './addstrategies.component.html',
  styleUrls: ['./addstrategies.component.css']
})
export class AddstrategiesComponent implements OnInit {

  sourceProducts:StockListModel[];
  targetProducts:StockListModel[];
  timeperiod = [];
  selectedtimeperiod: string;
  checked:boolean;
  strategyname?:string;
  strategydesc?:string;
  smodel?:StrategyModel;

  constructor(private stockservice:StockmasterService) {
    this.strategyname="";
    this.strategydesc= "";
    this.smodel = {} as StrategyModel;
    this.timeperiod = [
      {PeriodDesc: '1 Minute', PeriodCode: '1Min'},
      {PeriodDesc: '2 Minutes', PeriodCode: '2Min'},
      {PeriodDesc: '5 Minutes', PeriodCode: '5Min'},
      {PeriodDesc: '10 Minutes', PeriodCode: '10Min'},
      {PeriodDesc: '15 Minutes', PeriodCode: '15Min'},
      {PeriodDesc: '30 Minutes', PeriodCode: '30Min'},
      {PeriodDesc: '1 Hour', PeriodCode: '1H'},
      {PeriodDesc: '4 Hours', PeriodCode: '4H'},
      {PeriodDesc: '1 Day', PeriodCode: '1D'},
      {PeriodDesc: '1 Week', PeriodCode: '1W'},
      {PeriodDesc: '1 Month', PeriodCode: '1M'},
      {PeriodDesc: '1 Quarter', PeriodCode: '1Q'}
  ];
}


  ngOnInit(): void {
    this.stockservice.getStockMaster().subscribe(data => {
      let outdata = JSON.parse(data);
      this.sourceProducts = outdata;
      this.targetProducts = [];
      console.log(this.sourceProducts)
    })
  }

  handlecreateStrategy():void {
    this.smodel.strategyname = this.strategyname;
    this.smodel.strategydesc = this.strategydesc;
    let filteredsymbol = []
    for(let i = 0; i < this.targetProducts.length; i++ )
    {
      var jsonout = this.targetProducts[i].Symbol;
      filteredsymbol.push(jsonout)
    }
    this.smodel.symbol = filteredsymbol;
    this.smodel.frequency = this.selectedtimeperiod;
    this.smodel.enabled = this.checked;
    alert(JSON.stringify(this.smodel))
  }
}

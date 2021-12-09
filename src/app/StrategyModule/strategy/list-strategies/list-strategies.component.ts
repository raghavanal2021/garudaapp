import { Component, OnInit } from '@angular/core';
import { StrategyServiceService } from '../strategy-service.service';
import { Strategy } from '../strategymodel';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-list-strategies',
  templateUrl: './list-strategies.component.html',
  styleUrls: ['./list-strategies.component.css']
})
export class ListStrategiesComponent implements OnInit {

  strat?:Strategy[];
  sortOptions?: SelectItem[];
  sortOrder?: number;
  sortField?: string;
  checked:boolean = false
  constructor(public stratservice: StrategyServiceService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.stratservice.getStrategy().subscribe((data:any) => {
    this.strat = JSON.parse(data);
    console.log(this.strat)
    })

    this.sortOptions = [
      {label: 'Strategy Name', value: 'strategy_name'}
  ];
  this.primengConfig.ripple = true;
  }
  onSortChange(event) {
    let value = event.target.value;
        this.sortOrder = 1;
        this.sortField = value;
}
handlePerformanceButton(strate) {
  alert(strate)
}

}

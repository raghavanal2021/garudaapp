import { Component, OnInit } from '@angular/core';
import { StockmasterService } from '../stockmaster.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  cselectedCompanies: any[]=[];
  cfilteredCompanies:any[]=[];
  cdetails:any = [];
  cmessagelist:any = [];

  constructor(private cstockMaster:StockmasterService) { }

  ngOnInit(): void {
   this.getWatchList()
}
getWatchList() {
  this.cstockMaster.getWatchList().subscribe(data=>{
    let parsejson = JSON.parse(data);
    this.cmessagelist = [];
    for (let p = 0; p< parsejson.length;p++) {
      let symbollist = parsejson[p]['Symbol']
      this.cmessagelist.push(symbollist)
      this.cdetails.push(parsejson[p])
    }
})
}

  
filterCompanies(event) {
  this.getWatchList();
  let filtered: any[] = [];
  let query = event.query;
  for (let i = 0; i < this.cdetails.length; i++) {
    let detail = this.cdetails[i];
    if (detail.Symbol.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    filtered.push(detail);
    }
  }
  this.cfilteredCompanies = filtered;
}


}

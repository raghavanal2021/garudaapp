import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-strategiespage',
  templateUrl: './strategiespage.component.html',
  styleUrls: ['./strategiespage.component.css']
})
export class StrategiespageComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
  }

}

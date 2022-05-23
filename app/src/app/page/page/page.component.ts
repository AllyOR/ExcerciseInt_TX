import { Component, OnInit } from '@angular/core';

import {IstoreService} from "../../../core/services/istore.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  descriptions: any;
  constructor(private service: IstoreService) { }

  ngOnInit(): void {
    this.service.getDescription().subscribe((response:any) => {
      console.log(response);
      this.descriptions = response.data; //.slice(0,3);
    });
  }

}

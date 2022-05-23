import { Component, OnInit } from '@angular/core';

import {IstoreService} from "../../../core/services/istore.service";

import { SearchResults} from "../../models/results.model";
import {FormGroup} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  descriptions: any;
  description:any;

  // formulario: FormGroup;
  id : any;
  search = new FormControl('');
  // updateName() {
  //   this.search.setValue('Nancy');
  // }

  constructor(private service: IstoreService) { }

  ngOnInit(): void {
    this.service.getDescriptions().subscribe((response:any) => {
      console.log(response);
      //this.descriptions = response.data; //.slice(0,3);
      this.descriptions = response.results;
    });
  }

  OnSubscription(id: any){
    this.service.getDescription(id).subscribe((res) => {
      console.log(res);
      console.log(id);
    });
  }

}

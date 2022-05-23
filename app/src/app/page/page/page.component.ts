import { Component, OnInit } from '@angular/core';
import { IstoreService } from "../../../core/services/istore.service";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  descriptions: any;
  description:any;
  id : any;
  search = new FormControl('');

  container: any;
  option: any;
  public options:Array<any> = [
    {id: 1, option: 'podcast'},
    {id: 2, option: 'musicVideo'},
    {id: 3, option: 'music'}
  ];

  constructor(private service: IstoreService) { }

  ngOnInit(): void {
    this.service.getDescriptions().subscribe((response:any) => {
      console.log(response);
      // this.descriptions = response.results.slice(0,3);
      this.descriptions = response.results;
    });
  }

  OnSubscription(id: any){
    this.service.getDescription(id).subscribe((res) => {
      console.log(res);
      console.log(id);
    });
    this.getOptions(this.id);
  }

  getOptions(id:any){
    this.service.getText(id).subscribe((res) => {
      console.log(res);
      console.log(id);
    });
    this.printData();
  }

  printData(){
    this.container= this.descriptions;
    return this.container;
  }
}

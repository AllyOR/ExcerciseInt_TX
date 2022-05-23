import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IstoreService {

  url: string = 'https://itunes.apple.com/search?term=beyonce';//'https://itunes.apple.com/search?Beyonce';

  constructor(private http:HttpClient) { }

  public getDescription(){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.url, {headers});
  }
}

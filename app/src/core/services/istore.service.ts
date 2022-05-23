import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IstoreService {

  url: string = 'https://itunes.apple.com/search';

  constructor(private http:HttpClient) { }

  public getDescriptions(){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // return this.http.get(this.url + '/unknown', {headers});
    return this.http.get(this.url + '?term='+'Jack Johnson', {headers}).pipe(catchError(this.handleError));
  }

  public getDescription = (id: any) => {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + '?term=' + id, {headers}).pipe(catchError(this.handleError));
  }

  public getText = (id: any) => {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + '?term='+ id + '&media=musicVideo', {headers}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error("An error ocurred: ", error.error.message);
    }else{
      console.error(
        `Backend error: ${error.status}, `+ `body was: ${error.error}`
      );
    }
    return throwError("Something ocurred, try again later.")
  }
}

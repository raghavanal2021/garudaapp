import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { StockListModel } from './model/stocklistmodel';


@Injectable()
export class StockmasterService {

  apiurl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getStockMaster():Observable<any> {
    return this.http.get<any>(this.apiurl+"stockmaster").pipe(retry(1),catchError(this.handleError))
  }

  handleError(error: { errror: any; error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.errror instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Errpr Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage)
  }

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
});

  addtowatchlist(message:String) {
      return this.http.post<any>(this.apiurl+"addtowatchlist",message,{headers: this.headers}).pipe(retry(1),catchError(this.handleError))
  }

  getWatchList():Observable<any> {
    return this.http.get<any>(this.apiurl+"watchlist").pipe(retry(1),catchError(this.handleError))
  }
}

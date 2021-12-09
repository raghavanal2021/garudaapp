import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Strategy } from './strategymodel';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StrategyServiceService {

  apiurl = environment.APIEndpoint

  constructor(private http:HttpClient) { }

  getStrategy():Observable<Strategy> {
    return this.http.get<Strategy>(this.apiurl+"getStrategies").pipe(retry(1),catchError(this.handleError))
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

}

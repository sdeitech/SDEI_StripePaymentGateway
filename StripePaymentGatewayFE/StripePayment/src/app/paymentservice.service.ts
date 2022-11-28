import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  private SavePaymnentURL = "Stripe/SavePaymnent";
  private updateBusiness = environment.api_url + '/Stripe/SavePaymnent';
  constructor( private http: HttpClient) { }
  SavePaymnent(data: any): Observable<any> {
    debugger;
    return this.http.post(`${this.updateBusiness}`, data)
    .pipe(catchError(this.handleError('SavePayment', [])));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}

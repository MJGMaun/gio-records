import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`);
  }

  post(path: string, data: any): Observable<any> {
    const headers =  {
      headers: new  HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };
    return this.http.post(`${environment.apiUrl}${path}`,
    data,
    headers)
  }
}

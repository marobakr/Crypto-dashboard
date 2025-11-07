import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMethods {
  public http = inject(HttpClient);

  get<T>(endpoint: string, queryParams?: any): Observable<T> {
    return this.http.get<T>(endpoint, { params: queryParams });
  }
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(endpoint, data);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(endpoint, data);
  }

  patch<T>(endpoint: string, data: any): Observable<T> {
    return this.http.patch<T>(endpoint, data);
  }
}

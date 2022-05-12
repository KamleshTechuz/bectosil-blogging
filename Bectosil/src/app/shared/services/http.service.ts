import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = environment.apiUrl


  constructor(private http: HttpClient) { }

  getData(requrl:any, params?:any) {
    const url = `${this.apiUrl + requrl}`;
    return this.http.get(url, { params });
  }

  postData(requrl:any, payload:any){
    const url = `${this.apiUrl + requrl}`;
    return this.http.post(url, payload);
  }

  putData(requrl:any, payload:any) {
    const url = `${this.apiUrl + requrl}`;
    return this.http.put(url, payload);
  }

  deleteData(requrl:any) {
    const url = `${this.apiUrl + requrl}`;
    return this.http.delete(url);
  }
}

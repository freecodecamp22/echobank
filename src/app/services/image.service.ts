import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const imgapiUrl = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<any> {
    return this.http.get(`${imgapiUrl}?page=${id}`);
  }
}

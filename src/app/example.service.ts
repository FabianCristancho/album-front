import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}

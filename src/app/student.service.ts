import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Student {
  id?:number;
  name: string;
  email: string;
  phone:string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }

}

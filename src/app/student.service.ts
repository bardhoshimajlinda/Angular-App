import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
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

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }

  addStudent(student: Student) {
    return this.http.post("https://jsonplaceholder.typicode.com/users", student, this.httpOptions);
  }

  deleteStudent(id: number){
    return this.http.post("https://jsonplaceholder.typicode.com/users", id, this.httpOptions);
  }
}

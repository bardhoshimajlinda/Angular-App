import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from "../student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students!: Student[];
  constructor(private studentService: StudentService) {
  }
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((res :any) => this.students = res);
  }

  add(name:string, email:string, phone:string){

    name = name.trim();
    email = email.trim();
    phone = phone.trim();

    // stop execution when fields are empty
    if (!name || !email || !phone) {
      return;
    }

    // Stop execution when e-mail address does not contain "@"
    if (email.indexOf('@') < 1) {
      return;
    }

    this.studentService.addStudent({ name, email, phone } as Student)
      .subscribe((student:any) => {
        this.students.push(student)
      });
  }

  delete(id:any){
    this.students = this.students.filter(s => s.id !==id);
  }

}

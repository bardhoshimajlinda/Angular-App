import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from "../student.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-student-details',
  templateUrl: 'student-details.component.html',
  styleUrls: ['student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student!: Student;
  constructor(private location: Location, private route: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.studentService.updateStudent(this.student)
      .subscribe(() => this.goBack());
  }
}


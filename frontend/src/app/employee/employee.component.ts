import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployee();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployees = {
        _id: "",
        name: "",
        position: "",
        office: "",
        salary: 0
      }
    }
  }

  onSubmit(form: NgForm) {

    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe(
        (res) => {
          this.resetForm(form);
          this.refreshEmployee();
        }
      );
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe(
        (res) => {
          this.resetForm(form);
          this.refreshEmployee();
        }
      );
    }

  }

  refreshEmployee() {
    this.employeeService.getEmployee().subscribe(
      (res) => {
        this.employeeService.employees = res as Employee[];
      }
    );
  }

  onEdit(emp: Employee) {
    return this.employeeService.selectedEmployees = emp;
  }

  onDelete(emp: Employee, form: NgForm) {
    return this.employeeService.deleteEmployee(emp).subscribe(
      (res) => {
        this.resetForm(form);
        this.refreshEmployee();
      }
    );

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployees !: Employee;
  employees !: Employee[];
  url = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.url, emp);
  }

  getEmployee() {
    return this.http.get(this.url);
  }

  putEmployee(emp: Employee) {
    var empid = emp._id;
    return this.http.put(this.url + "/" + empid, emp);
  }

  deleteEmployee(emp: Employee) {
    var empid = emp._id;
    return this.http.delete(this.url + "/" + empid);
  }

}

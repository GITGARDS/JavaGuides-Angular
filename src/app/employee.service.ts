import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //private baseURL = "http://localhost:8080/api/v1/employees";
  private baseURL = 'http://localhost:8080/api/v1/employees';

  constructor(private httpCliente: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.httpCliente.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpCliente.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpCliente.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpCliente.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpCliente.delete(`${this.baseURL}/${id}`);
  }

}

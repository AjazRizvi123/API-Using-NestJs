import { Injectable } from "@nestjs/common";
import { title } from "process";
import { Employee } from "./employee.model";

@Injectable()
export class EmployeeService{
    employee: Employee []= [];

    insertEmployee(name: string, role: string, likes: string){

        const emplID= new Date().toString()
        const msg="Employee Added"
        const newEmployee= new Employee( emplID, name, role, likes);
        this.employee.push(newEmployee); 
        return msg;
    }

    getEmployee(){
        return [...this.employee];

    }
}
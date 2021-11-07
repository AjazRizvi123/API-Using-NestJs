import { Controller, Post, Body, Get } from "@nestjs/common";
import { EmployeeService } from "./employee.service";

@Controller('employee')
export class EmployeeController {
    constructor ( private readonly employeeService: EmployeeService){}    

    @Post()
    addEmployee(
        @Body('name') emplTitle: string,
        @Body('role') emplrole:string,
        @Body('likes') empllikes: string
        ) {

        const generatedId=this.employeeService.insertEmployee(emplTitle, emplrole, empllikes);
        return {id :generatedId}
    }

    @Get()
    getAllEmployee(){
        return this.employeeService.getEmployee();
    }

}

// Type

type ID = string | number;

type EmployeeName = { 
    firstName: string; 
    lastName: string; 
}

type EmployeeDetailes = { 
    email: string;
    phone: string; 
}

type Employee = EmployeeName & EmployeeDetailes;

const employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890"
};


// Interface

interface User {
    name: string;
    isActive: boolean;
  }
  
  interface Admin extends User {
    adminSince: Date;
  }
  
  const admin: Admin = {
    name: "Jane",
    isActive: true,
    adminSince: new Date()
  };
  
  // Declaration Merging // Inerface Reopening
  interface Window {
    title: string;
  }
  
  interface Window {
    width: number;
  }
  
  const myWindow: Window = {
    title: "My Window",
    width: 1024
  };
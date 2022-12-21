class Person{
    constructor(id, firstName, lastName, age){
        this._id = id;
        this._firstName =firstName;
        this._lastName = lastName;
        this._age = new Date(age);
    }
    get age(){
        return  new Date(Date.parse(new Date()) - Date.parse(age)).getFullYear() - 1970;
    }
    fullName = () => {
        return `${this.firstName} ${this.lastName}`
    }

}       

const john = new Person(1000, `jhon`, `smith`,`2011-01-01`);

class Employee extends Person{
   constructor(id, firstName, lastName, age, salary){
    super(id, firstName, lastName, age);
    this._salary = +salary;
   }

   get salary(){
       return this._salary;
    }
   set salary(salary){
       if(salary > this._salary){
           this._salary = +salary;
       }
       else{
           alert(`Error salary`);
       }
   } 
}

const work = new Employee(2000, `jhon`, `smith`,`2011-01-01`, 16000);

class Compoany{
    constructor(){
        this._employess = [];
    }

    get employess(){
        return this.employess;
    }

    addEmployee(employee, ...next c){
        const index = this._employess.findIndex(e => e.id === employee.id);
        if(index < 0){
            this.employess.push(employee);
            return true;
        }
        return false;
    }

}
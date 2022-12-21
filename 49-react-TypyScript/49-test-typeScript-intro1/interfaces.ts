interface Address {
  city: string;
  street: string;
  bulding: string | number;
}

interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  address: Address;
  fullName: (greeting: string) => string;
}

interface Employee extends Person {
  salary: number;
}

const maks: Employee = {
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  address: {
    city: 'Rehovot',
    street: 'Plaut',
    bulding: 10,
  },
  salary: 20000,
  fullName: (greeting) => {
    return 'hello';
  },
};

const maks2 = {
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  address: {
    city: 'Rehovot',
    street: 'Plaut',
    bulding: 10,
  },
  salary: 15000,
  fullName: (greeting) => {
    return 'hello';
  },
};

console.log(maks.salary);
console.log(maks2.salary);

const maks2copy = maks2 as Employee;
const maks2copy2 = <Employee>maks2;

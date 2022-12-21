let isLoading: boolean = true;
let num: number = 42;
let str: string = 'Hello world';

//Array
const primes1: number[] = [2, 3, 5, 7];
const primes2: Array<number> = [11, 13, 17];
primes2.push(19);

//Tuple
const john: [string, string, number] = ['John', 'Smith', 12345679];
john[1] = 'Jakson';
john.push('male');
john.push(42);

//Any
let z: any = 100500;
z = 'hello';
z = false;
z = 100500;

//function typing
function fullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
function greeting(fullName: string): void {
  console.log(`Hello ${fullName}`);
}

//Type
type Login = string;
let nickName: Login = 'admmin';
type ID = string | number;
let id2: ID = '123F123';
let id1: ID = 1234;

type User = {
  login: ID;
  password: string;
  email: string;
  birtDate?: Date;
  [key: string]: string | number | Date | undefined;
};
const peter: User = {
  login: 'peter100500',
  password: '12345',
  email: 'peter@gmail.com',
  birtDate: new Date('1999-05-21'),
  hobby: 'chess',
  zip: 1234,
};
const mary: User = {
  login: 'mary00500',
  password: '4321',
  email: 'peter@gmail.com',
  hobby: 'JavaScript',
};

type Area = {
  width: number;
  detph: number;
  area: () => number;
};

type Heigth = {
  height: number;
};

type Wardbore = Area & Heigth & { volume: () => number };

let aron: Wardbore = {
  width: 10,
  detph: 20,
  height: 20,
  area: function () {
    return this.width * this.depth;
  },
  volume: () => {
    return this.area() + this.heigth;
  },
};

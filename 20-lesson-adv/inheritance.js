const person = {
    hobby: `chess`,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const john = {
    firstName: `John`,
    lastName: `Smith`,

}
console.log(john);
console.log(john.hobby);
john.__proto__ = person;
console.log(john);
console.log(john.hobby);
john.hobby = `canabis`;
console.log(john.hobby);
console.log(person.fullName());
console.log(john.fullName());

const peter = new Person(`Peter`, `Jackson`);
const mary = new Person(`Mary`, `Smith`);
Person.prototype = person;



function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


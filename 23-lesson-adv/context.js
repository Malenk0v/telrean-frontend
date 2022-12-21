const showName = function(){
    return `${this.firsName} ${this.lastName}`
}

const john = {
    firsName: `John`,
    lastName: `Smith`
}

const peter = {
    firsName: `Peter`,
    lastName: `Jeckson`
}

john.fullName = showName;
peter.fullName = showName;

console.log(john.fullName());
console.log(peter.fullName());

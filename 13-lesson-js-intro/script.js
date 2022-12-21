// && - "and"
// || - "or"
// ! - "not"

let str = `Rabindranat`;

let nickName = str || `Anonymus`;


console.log(nickName);

greting()
greting(`Mikle`)

function greting(name = `Anonymus`){
  //name = name || `Anonymus` //this defualt value "Anonymus"
  //name = name ?? `Anonymus` // this "??" operator нудевого слияния 
    console.log(`Hello ${name}`);
}
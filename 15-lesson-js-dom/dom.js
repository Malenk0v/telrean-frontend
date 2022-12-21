const div1 = document.getElementById('div1')
console.log(div1.innerHTML)
div1.style.border = `1px solid black`;

const pdiv1 = document.querySelectorAll(`#div1 > p`);
for(let i = 0; i < pdiv1.length; i++){
    pdiv1[i].innerHTML = `<span> text ${i+1}</span>`
}

const children  = div1.children; 
console.log(children.length);

for(let i = 0; i<children.length; i++){
 children[i].style.color = `red`;
}

const newP1 = document.createElement(`p`);
const newP1Text = document.createTextNode(`This text creted with spical method`)
newP1.appendChild(newP1Text);
document.body.insertBefore(newP1, div1.nextElementSibling);

const d = new Date();

console.log(d);
console.log(d.getHours)